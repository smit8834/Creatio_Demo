define("FinesseCtiProviderV2", ["ext-base", "terrasoft", "StropheModule"], function(Ext, Terrasoft, StropheModule) {

	Ext.ns("Terrasoft.integration");
	Ext.ns("Terrasoft.integration.telephony");
	Ext.ns("Terrasoft.integration.telephony.finesse");

	//region Class: FinesseCtiProviderV2

	Ext.require("Terrasoft.integration.telephony.finesse.FinesseCtiProvider", function() {

		/**
		 * Provider class to the Finesse service (for version 11.5+).
		 */
		Ext.define("Terrasoft.integration.telephony.finesse.FinesseCtiProviderV2", {
			extend: "Terrasoft.integration.telephony.finesse.FinesseCtiProvider.self",
			alternateClassName: "Terrasoft.FinesseCtiProviderV2",
			singleton: true,

			//region Properties: Private

			/**
			 * Path to Finesse websocket service.
			 * @private
			 * @type {String}
			 */
			_websocketServiceUrl: "",

			/**
			 * Strophe eventing object.
			 * @private
			 * @type {Object}
			 */
			_xmppClient: null,

			//endregion

			//region Methods: Private

			/**
			 * Converts input string to base64 encoded string.
			 * @private
			 * @param {String} input Input string.
			 * @return {String} Base64 representation of input string.
			 */
			_base64Encode: function(input) {
				let output = "", idx, data;
				const table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
				for (idx = 0; idx < input.length; idx += 3) {
					data =  input.charCodeAt(idx) << 16 |
								input.charCodeAt(idx + 1) << 8 |
								input.charCodeAt(idx + 2);
					output += table.charAt((data >>> 18) & 0x003f) +
								table.charAt((data >>> 12) & 0x003f);
					output += ((idx + 1) < input.length) ?
								table.charAt((data >>> 6) & 0x003f) :
								"=";
					output += ((idx + 2) < input.length) ?
								table.charAt(data & 0x003f) :
								"=";
				}
				return output;
			},

			/**
			 * Adds strophe.ping plugin (external) to XMPP client connection.
			 * @private
			 */
			_addPingXmppClientConnectionPlugin: function() {
				StropheModule.Strophe.addConnectionPlugin("ping", {
					_c: null,

					// called by the Strophe.Connection constructor
					init: function(conn) {
						this._c = conn;
						StropheModule.Strophe.addNamespace("PING", "urn:xmpp:ping");
					},

					/**
					 * Function: ping
					 *
					 * Parameters:
					 * (String) to - The JID you want to ping
					 * (Function) success - Callback function on success
					 * (Function) error - Callback function on error
					 * (Integer) timeout - Timeout in milliseconds
					 */
					ping: function(jid, success, error, timeout) {
						var id = this._c.getUniqueId("ping");
						var iq = StropheModule.$iq({type: "get", to: jid, id: id}).c("ping", {xmlns: StropheModule.Strophe.NS.PING});
						this._c.sendIQ(iq, success, error, timeout);
					},

					/**
					 * Function: pong
					 *
					 * Parameters:
					 * (Object) ping - The ping stanza from the server.
					 */
					pong: function(ping) {
						var from = ping.getAttribute("from");
						var id = ping.getAttribute("id");
						var iq = StropheModule.$iq({type: "result", to: from,id: id});
						this._c.sendIQ(iq);
					},

					/**
					 * Function: addPingHandler
					 *
					 * Parameters:
					 * (Function) handler - Ping handler
					 *
					 * Returns:
					 * A reference to the handler that can be used to remove it.
					 */
					addPingHandler: function(handler) {
						return this._c.addHandler(handler, StropheModule.Strophe.NS.PING, "iq", "get");
					}
				});
			},

			//endergion

			//region Methods: Protected

			/**
			 * @inheritdoc BaseCtiProvider#init
			 * @overriden
			 */
			init: function() {
				this.callParent(arguments);
				this._addPingXmppClientConnectionPlugin();
			},

			/**
			 * Sets required dependensies.
			 * @protected
			 * @param {Function} callback Callback function.
			 */
			initDependencies: function(callback) {
				if (!Ext.global.jabberwerx.util.crypto) {
					Ext.global.jabberwerx.util.crypto = {
						b64Encode: this._base64Encode
					};
				}
				Ext.callback(callback, this);
			},

			/**
			 * Opens connection to Finesse sever.
			 * @protected
			 * @param {Object} config Connection parameters.
			 */
			connect: function(config) {
				Terrasoft.chain(
					this.initDependencies,
					this.initSysSettings,
					function() {
						this.agentId = config.AgentID;
						this.password = config.Password;
						this.deviceId = config.Extension;
						this.initServiceChannel();
					}, this);
			},

			/**
			 * Initializes finesse settings.
			 * @protected
			 * @param {Function} callback Callback function.
			 * @param {Object} scope Callback function scope.
			 */
			initSysSettings: function(callback, scope) {
				Terrasoft.SysSettings.querySysSettings(["FinesseServerAddress", "FinesseWebsocketAddress"],
					function(sysSettingsValue) {
						this.finesseApiPath = new URL(this.finesseApiPath, sysSettingsValue.FinesseServerAddress).href;
						this.domain = new URL(sysSettingsValue.FinesseServerAddress).hostname;
						this._websocketServiceUrl = sysSettingsValue.FinesseWebsocketAddress +"/ws/";
						Ext.callback(callback, scope || this);
				}, this);
			},

			/**
			 * Processes the connection event on the Cisco Finesse server side.
			 * @protected
			 * @param {String} status Strophe eventing object connection status.
			 */
			onConnected: function (status) {
				Terrasoft.Logger.log("onConnect() - XMPP client onConnected fired with status " + status);
				const xmppClientConnectionStatus = StropheModule.Strophe.Status;
				switch (status) {
					case xmppClientConnectionStatus.CONNECTED:
						const xmppClient = this._xmppClient;
						xmppClient.addHandler(this.eventHandler.bind(this), null, "message", null, null, null);
						xmppClient.send(StropheModule.$pres().tree());
						const jid = this.agentId + "@" + this.domain + "/" + this.deviceId;
						const xmppClientPingMillisecondsPeriod = 10000;
						const interval = setInterval(function () {
							try {
								xmppClient.ping.ping(jid,
									Terrasoft.emptyFn,
									Terrasoft.emptyFn,
									xmppClientPingMillisecondsPeriod);
							} catch (e) {
								clearInterval(interval);
								xmppClient.disconnect();
								this.fireEvent("error", {
									data: e.message,
									errorType: Terrasoft.MsgErrorType.OPEN_CONNECTION_ERROR
								});
							}
						}.bind(this), xmppClientPingMillisecondsPeriod);
						this.loginFinesse();
						break;
					case xmppClientConnectionStatus.ERROR:
						Terrasoft.Logger.log("onConnect() - XMPP client about to reset because of error");
						break;
					case xmppClientConnectionStatus.AUTHFAIL:
						Terrasoft.Logger.log("onConnect() - XMPP client about to reset because of authorization failed");
						break;
					default:
						break;
				}
			},

			/**
			 * Processes the event when event occurs on the Cisco Finesse server side.
			 * @protected
			 * @param {Object} data Event handler parameters.
			 */
			eventHandler: function (data) {
				if (this.processFinesseEvent) {
					const messageText = data.textContent;
					this.processFinesseEvent(messageText);
				} else {
					this.onFinesseEvent({selected: data});
				}
				return true;
			},

			/**
			 * Initializes service channel settings.
			 * @protected
			 */
			initServiceChannel: function() {
				this._xmppClient = new StropheModule.Strophe.Connection(this._websocketServiceUrl);
				const jid = this.agentId + "@" + this.domain + "/" + this.deviceId;
				this._xmppClient.connect(jid, this.password, this.onConnected.bind(this));
			}

			//endregion

		});
	});
});

//endregion
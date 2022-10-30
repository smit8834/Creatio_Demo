define("SystemDesigner", ["NetworkUtilities"], function(NetworkUtilities) {
	return {
		methods: {

			//region Methods: Private

			/**
			 * Opens SSO settings section.
			 * @private
			 */
			openSsoSettings: function() {
				NetworkUtilities.openEntitySection({
					entitySchemaName: "SsoIdentityProvider",
					sandbox: this.sandbox
				});
			},

			//endregion

			//region Methods: Protected

			/**
			 * @inheritdoc SystemDesigner#getOperationRightsDecoupling
			 * @overridden
			 */
			 getOperationRightsDecoupling: function() {
				const operationRights = this.callParent(arguments);
				operationRights.openSsoSettings = "CanManageSso";
				return operationRights;
			},

			//endregion

		},
		diff: [
			{
				"operation": "insert",
				"propertyName": "items",
				"parentName": "UsersTile",
				"name": "SsoSettings",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.LINK,
					"caption": { "bindTo": "Resources.Strings.SsoSettingsCaption" },
					"tag": "openSsoSettings",
					"click": { "bindTo": "invokeOperation" }
				}
			}
		]
	};
});


 
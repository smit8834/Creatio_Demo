define("AppFeature_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(devkit)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"columns": [
						"298px",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				}
			},
			{
				"operation": "merge",
				"name": "LeftModulesContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "LeftAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					}
				}
			},
			{
				"operation": "remove",
				"name": "LeftAreaContainer"
			},
			{
				"operation": "merge",
				"name": "CardContentContainer",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 6,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "remove",
				"name": "ControlGroupContainer"
			},
			{
				"operation": "insert",
				"name": "Button_lhecmj6",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_lhecmj6_caption)#",
					"color": "default",
					"disabled": false,
					"iconPosition": "left-icon",
					"clicked": {
						"request": "ft.RefreshCurrentFeatureCacheRequest"
					},
					"clickMode": "default",
					"icon": "reload-button-icon"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Label_56ivm9v",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(Label_56ivm9v_caption)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Input_bmj6xsw",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"control": "$Code",
					"label": "$Resources.Strings.Code",
					"labelPosition": "above",
					"placeholder": ""
				},
				"parentName": "LeftAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_8diuphi",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"control": "$StringAttribute_4v84fih",
					"label": "$Resources.Strings.StringAttribute_4v84fih",
					"labelPosition": "above",
					"placeholder": "",
					"readonly": true
				},
				"parentName": "LeftAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_3heb02b",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"control": "$StringAttribute_dh2cq5a",
					"label": "$Resources.Strings.StringAttribute_dh2cq5a",
					"labelPosition": "above",
					"placeholder": ""
				},
				"parentName": "LeftAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Checkbox_ph0l6v3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"control": "$BooleanAttribute_gs4e3op",
					"label": "$Resources.Strings.BooleanAttribute_gs4e3op",
					"labelPosition": "right",
					"placeholder": ""
				},
				"parentName": "LeftAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Checkbox_c3drkj6",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"control": "$BooleanAttribute_0tids4x",
					"label": "$Resources.Strings.BooleanAttribute_0tids4x",
					"labelPosition": "right",
					"disabled": true,
					"placeholder": ""
				},
				"parentName": "LeftAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ControlGroupContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"padding": {
						"top": "large",
						"right": "large",
						"bottom": "large",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 10,
						"rowSpan": 1
					},
					"items": []
				},
				"parentName": "CardContentWrapper",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Label_car4a7t",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#ResourceString(Label_car4a7t_caption)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start"
				},
				"parentName": "ControlGroupContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_umrgng3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_umrgng3_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "#004fd6",
					"fullWidthHeader": false,
					"titleWidth": 20
				},
				"parentName": "ControlGroupContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_3du8770",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_umrgng3",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_8uu1j8a",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_3du8770",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_6v9jtzl",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_6v9jtzl_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "AppFeatureState",
							"defaultValues": [
								{
									"attributeName": "Feature",
									"value": "$Id"
								}
							]
						}
					},
					"clickMode": "default"
				},
				"parentName": "FlexContainer_8uu1j8a",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_qfdv96u",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_qfdv96u_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "DataGrid_z88uf4iDS"
						}
					},
					"clickMode": "default"
				},
				"parentName": "FlexContainer_8uu1j8a",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_2liayky",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax( 32px, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "ExpansionPanel_umrgng3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_z88uf4i",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"items": "$DataGrid_z88uf4i",
					"primaryColumnName": "DataGrid_z88uf4iDS_Id",
					"columns": [
						{
							"id": "d4a649c8-ff6f-7dba-2b87-3d7d998daa8a",
							"code": "DataGrid_z88uf4iDS_AdminUnit",
							"caption": "#ResourceString(DataGrid_z88uf4iDS_AdminUnit)#",
							"dataValueType": 10,
							"width": 383
						},
						{
							"id": "2b35888d-4d65-7348-003c-745820e2c062",
							"code": "DataGrid_z88uf4iDS_FeatureState",
							"caption": "#ResourceString(DataGrid_z88uf4iDS_FeatureState)#",
							"dataValueType": 12
						}
					]
				},
				"parentName": "GridContainer_2liayky",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"Code": {
					"modelConfig": {
						"path": "PDS.Code"
					}
				},
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"StringAttribute_dh2cq5a": {
					"modelConfig": {
						"path": "PDS.Description"
					}
				},
				"DataGrid_z88uf4i": {
					"isCollection": true,
					"modelConfig": {
						"path": "DataGrid_z88uf4iDS",
						"filterAttributes": [
							{
								"loadOnChange": true,
								"name": "DataGrid_z88uf4i_PredefinedFilter"
							}
						],
						"sortingConfig": {
							"default": [
								{
									"direction": "asc",
									"columnName": "FeatureState"
								}
							]
						}
					},
					"viewModelConfig": {
						"attributes": {
							"DataGrid_z88uf4iDS_AdminUnit": {
								"modelConfig": {
									"path": "DataGrid_z88uf4iDS.AdminUnit"
								}
							},
							"DataGrid_z88uf4iDS_FeatureState": {
								"modelConfig": {
									"path": "DataGrid_z88uf4iDS.FeatureState"
								}
							},
							"DataGrid_z88uf4iDS_Id": {
								"modelConfig": {
									"path": "DataGrid_z88uf4iDS.Id"
								}
							}
						}
					}
				},
				"DataGrid_z88uf4i_PredefinedFilter": {
					"value": null
				},
				"BooleanAttribute_0tids4x": {
					"modelConfig": {
						"path": "PDS.StateForCurrentUser"
					}
				},
				"StringAttribute_4v84fih": {
					"modelConfig": {
						"path": "PDS.Source"
					}
				},
				"BooleanAttribute_gs4e3op": {
					"modelConfig": {
						"path": "PDS.State"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "AppFeature"
					},
					"scope": "page"
				},
				"DataGrid_z88uf4iDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "AppFeatureState",
						"attributes": {
							"AdminUnit": {
								"path": "AdminUnit"
							},
							"FeatureState": {
								"path": "FeatureState"
							}
						}
					}
				}
			},
			"primaryDataSourceName": "PDS",
			"dependencies": {
				"DataGrid_z88uf4iDS": [
					{
						"attributePath": "Feature",
						"relationPath": "PDS.Id"
					}
				]
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "ft.RefreshCurrentFeatureCacheRequest",
				handler: async (request, next) => {
					const httpClientService = new devkit.HttpClientService();
					const featureCode = await request.$context.Code;
					const endpoint = `/rest/FeatureService/ClearFeaturesCacheForAllUsers/${featureCode}`;
					const response = await httpClientService.get(endpoint);
					const handlerChain = devkit.HandlerChainService.instance;
					await handlerChain.process({
						type: 'crt.CancelRecordChangesRequest',
						$context: request.$context
					});
					Terrasoft.showInformation(response.body);
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
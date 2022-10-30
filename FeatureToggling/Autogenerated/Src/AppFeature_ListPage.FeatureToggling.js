define("AppFeature_ListPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(devkit)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "ActionButtonsContainer"
			},
			{
				"operation": "remove",
				"name": "AddButton"
			},
			{
				"operation": "merge",
				"name": "SectionContentWrapper",
				"values": {
					"direction": "row",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "c48886b7-a751-986a-7de3-3cb1213fdf7d",
							"code": "PDS_Code",
							"caption": "#ResourceString(PDS_Code)#",
							"dataValueType": 27,
							"width": 434
						},
						{
							"id": "86f5ed6e-d963-d0b7-75cb-c79d407d2828",
							"code": "PDS_State",
							"caption": "#ResourceString(PDS_State)#",
							"dataValueType": 12,
							"width": 140
						},
						{
							"id": "fc067e76-118b-2561-e723-58d79e1922f2",
							"code": "PDS_StateForCurrentUser",
							"caption": "#ResourceString(PDS_StateForCurrentUser)#",
							"dataValueType": 12,
							"width": 301
						},
						{
							"id": "19d4f69f-359f-a3cc-ae68-427e3dffed8b",
							"code": "PDS_Source",
							"caption": "#ResourceString(PDS_Source)#",
							"dataValueType": 30
						},
						{
							"id": "b391c61f-6a19-2bc6-4b16-ba609522dcac",
							"code": "PDS_Description",
							"caption": "#ResourceString(PDS_Description)#",
							"dataValueType": 28
						}
					],
					"layoutConfig": {
						"basis": "100%",
						"width": 300
					},
					"primaryColumnName": "PDS_Id",
					"sorting": "$ItemsSorting | crt.ToDataTableSortingConfig: 'Items'"
				}
			},
			{
				"operation": "insert",
				"name": "GridContainer_fggdwmq",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
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
				"parentName": "ActionContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AddButton",
				"values": {
					"type": "crt.Button",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"itemsAttributeName": "Items"
						}
					},
					"color": "accent",
					"caption": "$Resources.Strings.AddButton",
					"size": "l",
					"iconPosition": "only-text",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_fggdwmq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_4s6loja",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 11,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#ResourceString(Label_4s6loja_caption)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#DF1F26",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "center"
				},
				"parentName": "GridContainer_fggdwmq",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Label_u3t55vq",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 11,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#ResourceString(Label_u3t55vq_caption)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "center"
				},
				"parentName": "GridContainer_fggdwmq",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_k5ng6yn",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "medium",
						"rowGap": "none"
					},
					"items": [],
					"color": "primary",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_f65ub2d",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "large"
					},
					"justifyContent": "start",
					"gap": "none"
				},
				"parentName": "GridContainer_k5ng6yn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FolderTreeActions_p4bcvr1",
				"values": {
					"type": "crt.FolderTreeActions",
					"caption": "#ResourceString(FolderTreeActions_p4bcvr1_caption)#",
					"folderTree": "FolderTree_gm5sany"
				},
				"parentName": "FlexContainer_f65ub2d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_nzr59ar",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "medium",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "end",
					"gap": "none"
				},
				"parentName": "GridContainer_k5ng6yn",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Button_kk2qf2e",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RefreshButtonCaption)#",
					"color": "default",
					"disabled": false,
					"clicked": {
						"request": "ft.RefreshFeaturesCacheRequest"
					},
					"iconPosition": "left-icon",
					"icon": "reload-button-icon",
					"clickMode": "default"
				},
				"parentName": "FlexContainer_nzr59ar",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FolderTree_gm5sany",
				"values": {
					"type": "crt.FolderTree",
					"caption": "#ResourceString(FolderTree_gm5sany_caption)#",
					"sourceSchemaName": "FolderTree",
					"rootSchemaName": "AppFeature",
					"layoutConfig": {
						"width": 328.125
					},
					"classes": [
						"section-folder-tree"
					]
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"Items": {
					"viewModelConfig": {
						"attributes": {
							"PDS_Code": {
								"modelConfig": {
									"path": "PDS.Code"
								}
							},
							"PDS_State": {
								"modelConfig": {
									"path": "PDS.State"
								}
							},
							"PDS_StateForCurrentUser": {
								"modelConfig": {
									"path": "PDS.StateForCurrentUser"
								}
							},
							"PDS_Source": {
								"modelConfig": {
									"path": "PDS.Source"
								}
							},
							"PDS_Description": {
								"modelConfig": {
									"path": "PDS.Description"
								}
							},
							"PDS_Id": {
								"modelConfig": {
									"path": "PDS.Id"
								}
							}
						}
					},
					"modelConfig": {
						"path": "PDS",
						"pagingConfig": {
							"rowCount": 30
						},
						"sortingConfig": {
							"attributeName": "ItemsSorting",
							"default": [
								{
									"direction": "asc",
									"columnName": "Code"
								}
							]
						},
						"filterAttributes": [
							{
								"loadOnChange": true,
								"name": "FolderTree_gm5sany_active_folder_filter"
							},
							{
								"name": "Items_PredefinedFilter",
								"loadOnChange": true
							}
						]
					}
				},
				"ItemsSorting": {},
				"FolderTree_gm5sany_visible": {
					"value": false
				},
				"FolderTree_gm5sany_items": {
					"isCollection": true,
					"viewModelConfig": {
						"attributes": {
							"Id": {
								"modelConfig": {
									"path": "FolderTree_gm5sany_items_DS.Id"
								}
							},
							"Name": {
								"modelConfig": {
									"path": "FolderTree_gm5sany_items_DS.Name"
								}
							},
							"ParentId": {
								"modelConfig": {
									"path": "FolderTree_gm5sany_items_DS.Parent.Id"
								}
							},
							"FilterData": {
								"modelConfig": {
									"path": "FolderTree_gm5sany_items_DS.FilterData"
								}
							}
						}
					},
					"modelConfig": {
						"path": "FolderTree_gm5sany_items_DS",
						"filterAttributes": [
							{
								"name": "FolderTree_gm5sany_items_DS_filter",
								"loadOnChange": true
							}
						]
					},
					"embeddedModel": {
						"name": "FolderTree_gm5sany_items_DS",
						"config": {
							"type": "crt.EntityDataSource",
							"config": {
								"entitySchemaName": "FolderTree"
							}
						}
					}
				},
				"FolderTree_gm5sany_active_folder_id": {},
				"FolderTree_gm5sany_active_folder_name": {},
				"FolderTree_gm5sany_active_folder_filter": {
					"value": {}
				},
				"FolderTree_gm5sany_items_DS_filter": {
					"value": {
						"isEnabled": true,
						"trimDateTimeParameterToDate": false,
						"filterType": 6,
						"logicalOperation": 0,
						"items": {
							"3714ebf4-41a3-9a82-8e8b-039d9ac03ce1": {
								"isEnabled": true,
								"trimDateTimeParameterToDate": false,
								"filterType": 1,
								"comparisonType": 3,
								"leftExpression": {
									"expressionType": 0,
									"columnPath": "EntitySchemaName"
								},
								"rightExpression": {
									"expressionType": 2,
									"parameter": {
										"dataValueType": 1,
										"value": "AppFeature"
									}
								}
							}
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"hiddenInPageDesigner": true,
					"config": {
						"entitySchemaName": "AppFeature",
						"attributes": {
							"Code": {
								"path": "Code"
							},
							"State": {
								"path": "State"
							},
							"StateForCurrentUser": {
								"path": "StateForCurrentUser"
							},
							"Source": {
								"path": "Source"
							},
							"Description": {
								"path": "Description"
							}
						}
					},
					"scope": "viewElement"
				}
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "ft.RefreshFeaturesCacheRequest",
				handler: async (request, next) => {
					const httpClientService = new devkit.HttpClientService();
					const endpoint = "/rest/FeatureService/ClearFeaturesCacheForAllUsers/";
					const response = await httpClientService.get(endpoint);
					const handlerChain = devkit.HandlerChainService.instance;
					await handlerChain.process({
						type: 'crt.LoadDataRequest',
						"config": {
							"loadType": "reload"
						},
						"dataSourceName": "PDS",
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
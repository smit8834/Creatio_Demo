(function() {
	require.config({
		paths: {
			"StructureExplorerComponent": Terrasoft.getFileContentUrl("NUI", "src/js/structure-explorer-component/main.js"),
			"StructureExplorerComponentStyles": Terrasoft.getFileContentUrl("NUI", "src/js/structure-explorer-component/styles.css"),
			"ErrorListDialogComponent": Terrasoft.getFileContentUrl("NUI", "src/js/error-list-dialog-component/main.js"),
			"ErrorListDialogComponentStyles": Terrasoft.getFileContentUrl("NUI", "src/js/error-list-dialog-component/styles.css"),
			"SchemaViewComponent": Terrasoft.getFileContentUrl("NUI", "src/js/schema-view-component/main.js"),
			"SchemaViewComponentStyles": Terrasoft.getFileContentUrl("NUI", "src/js/schema-view-component/styles.css")
		},
		shim: {
			"StructureExplorerComponent": {
				deps: ["ng-core", "css-ltr!StructureExplorerComponentStyles"]
			},
			"ErrorListDialogComponent": {
				deps: ["ng-core", "css-ltr!ErrorListDialogComponentStyles"]
			},
			"SchemaViewComponent": {
				deps: ["ng-core", "chartjs", "css-ltr!SchemaViewComponentStyles"]
			}
		}
	});
})();

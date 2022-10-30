(function() {
	require.config({
		paths: {
			"page-wizard-component": Terrasoft.getFileContentUrl("DesignerTools", "src/js/page-wizard-component/main.js"),
			"page-wizard-component-styles": Terrasoft.getFileContentUrl("DesignerTools", "src/js/page-wizard-component/styles.css"),
		},
		shim: {
			"page-wizard-component": {
				deps: ["ng-core", "css-ltr!page-wizard-component-styles"]
			}
		}
	});
}());

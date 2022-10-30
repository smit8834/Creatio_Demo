(function() {
    require.config({
        paths: {
            "DuplicatesWidgetComponent": Terrasoft.getFileContentUrl("Deduplication", "src/js/duplicates-widget/main.js"),
            "DuplicatesWidgetComponentStyles": Terrasoft.getFileContentUrl("Deduplication", "src/js/duplicates-widget/styles.css"),
        },
        shim: {
            "DuplicatesWidgetComponent": {
                deps: ["ng-core", "chartjs", "css-ltr!DuplicatesWidgetComponentStyles"]
            }
        }
    });
})();

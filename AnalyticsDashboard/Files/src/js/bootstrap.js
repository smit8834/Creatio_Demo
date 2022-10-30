(function() {
    require.config({
        paths: {
            "AnalyticsDashboard": Terrasoft.getFileContentUrl("AnalyticsDashboard", "src/js/analytics-dashboard/main.js"),
            "AnalyticsDashboardStyles": Terrasoft.getFileContentUrl("AnalyticsDashboard", "src/js/analytics-dashboard/styles.css"),
        },
        shim: {
            "AnalyticsDashboard": {
                deps: ["ng-core", "css-ltr!AnalyticsDashboardStyles"]
            }
        }
    });
})();

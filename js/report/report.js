fetch('http://127.0.0.1:5000/report')
    .then(response => response.json())
    .then(report => {
        let rows = report.best_customers.map(element => createReportTemplate(element, "#report-best-customer-item-template"));
        let tableCustomers = $("#report-best-customer tbody");
        tableCustomers.append(rows);

        let ingredient = createReportTemplate(report.most_required_ingredient, "#report-most-required-ingredient-item-template");
        let tableIngredient = $("#reports-most-required-ingredient tbody");
        tableIngredient.append(ingredient);

        let month = createReportTemplate(report.most_revenue_month, "#report-most-revenue-month-item-template");
        let tableMonth = $("#reports-most-revenue-month tbody");
        tableMonth.append(month);
    });
    

function createReportTemplate(report, tableTemplate) {
    let template = $(tableTemplate)[0].innerHTML;
    return Mustache.render(template, report);
}
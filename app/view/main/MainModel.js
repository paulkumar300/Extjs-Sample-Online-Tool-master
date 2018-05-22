/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('SampleOnlineTool.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Target Analysis',

        title: 'Track and Analyse Potential Targets',

        information: '<p>This tool can be utilized to track and analyse potential targets in the IT industry.</p><p>It loads the data via an Ajax Call and then renders the information in the grid panel. The grid panel used has advanced features like row-editing (it enables us to edit the data that is rendered in the grid panel and also allows the capability to add the data manually) and row-expander (which enables us to add targets dynamically).</p><p>To better analyse the data provided the grid column uses sparkline widget to display the trends/performance information based on the sales and the salesChange data.</p></br>',

        userdetails: '<p>John Doe</p></br><p>Lead Solution Architect</p>',

        contactUs: '<p>Peter Dyer</p></br><p>555-222-111</p>'
    }

    //TODO - add data, formulas and/or methods to support your view
});

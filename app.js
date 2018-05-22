/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'SampleOnlineTool.Application',

    name: 'SampleOnlineTool',

    requires: [
        // This will automatically load all classes in the SampleOnlineTool namespace
        // so that application classes do not need to require each other.
        'SampleOnlineTool.*'
    ],

    // The name of the initial view to create.
    mainView: 'SampleOnlineTool.view.main.Main'
});

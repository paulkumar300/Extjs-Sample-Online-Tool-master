Ext.define('SampleOnlineTool.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'SampleOnlineTool.model.Personnel',

    autoLoad: true,

    proxy:{
        type: 'ajax',
        url: '../SampleOnlineTool/resources/sampleData.json',
        reader:{
            type: 'json',
            rootProperty: 'results'
        }
    }
});

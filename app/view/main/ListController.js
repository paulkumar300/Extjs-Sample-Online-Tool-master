/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('SampleOnlineTool.view.main.ListController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.listcontroller',

  init: function(view) {
    var store = view.getStore();

    this.callParent();
    if (store.isLoaded() && store.getCount()) {
      this.startTicker(store);
    }
    view.getStore().on('load', 'onStoreLoad', this);
  },

  onStoreLoad: function(store) {
    // to clear the interval to avoid the memory leaks
    Ext.uninterval(this.timer);
    this.startTicker(store);
  },

  startTicker: function(store) {
    if (this.timer) {
      return;
    }

    store.removeAt(15, 70);

    var count = store.getCount(),
      i, j, rec;

    for (i = 0; i < count; i++) {
      rec = store.getAt(i);
      rec.beginEdit();
      for (j = 0; j < 10; j++) {
        rec.addSalesTick();
      }
      rec.endEdit(true);
    }

    this.timer = Ext.interval(function() {
      rec = store.getAt(Ext.Number.randomInt(0, store.getCount() - 1));
      rec.addSalesTick();
    }, Ext.isIE || !Ext.is.Desktop ? 100 : 300);

  },

  onAddTargetClick: function() {
    var grid, plugin, record;

    grid = this.getView();
    plugin = grid.findPlugin('rowediting');

    plugin.cancelEdit();

    record = new SampleOnlineTool.model.Personnel({
      name: 'SampleName',
      status: 'SampleStatus',
      information: 'SampleInformation',
      sales: 20,
      salesChange: 1.2
    });

    grid.getStore().insert(0, record);
    plugin.startEdit(record, 0);
  },

  onRemoveClick: function() {
    var grid, store, selModel;

    grid = this.getView();
    store = grid.getStore();
    selModel = grid.getSelectionModel();

    grid.findPlugin('rowediting').cancelEdit();

    store.remove(selModel.getSelection());

    if (store.getCount() > 0) {
      selModel.select(0);
    }
  },

  onSelectionChange: function(view, records) {
    var button = this.lookupReference('removeTarget');

    button.setDisabled(!records.length);
  }
});

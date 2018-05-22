/**
 * This view is an example list of people.
 */
Ext.define('SampleOnlineTool.view.main.List', {
  extend: 'Ext.grid.Panel',
  xtype: 'mainlist',
  controller: 'listcontroller',
  viewModel: 'listviewmodel',
  requires: [
    'SampleOnlineTool.store.Personnel',
    'SampleOnlineTool.view.main.ListModel',
    'SampleOnlineTool.view.main.ListController'
  ],

  title: {
    bind: '{title}'
  },
  height: 700,
  layout: 'fit',

  store: {
    type: 'personnel'
  },

  plugins: {
    rowediting: {
      clicksToMoveEditor: 1,
      autoCancel: false
    },
    rowexpander: {
      rowBodyTpl: new Ext.XTemplate(
        '<p><b>Company:</b> {name}</p>',
        '<p><b>Information:</b> {information}</p><br>')
    }
  },

  dockedItems: [{
    xtype: 'toolbar',
    dock: 'top',
    items: [{
      xtype: 'button',
      text: 'Add Target',
      iconCls: 'x-fa fa-plus-circle',
      handler: 'onAddTargetClick'
    }, {
      xtype: 'button',
      text: 'Remove Target',
      iconCls: 'x-fa fa-minus-circle',
      reference: 'removeTarget',
      handler: 'onRemoveClick',
      disabled: true
    }]
  }],

  columns: [{
      text: 'Name',
      dataIndex: 'name',
      editor: {
        allowBlank: false
      },
      flex: 1
    },
    {
      text: 'Status',
      dataIndex: 'status',
      flex: 1,
      editor: {
        allowBlank: false
      }
    },

    {
      text: 'Sales',
      flex: 1,
      formatter: 'usMoney',
      dataIndex: 'sales',
      align: 'right',
      producesHTML: false,
      sortable: false,
      editor: {
        allowBlank: false
      }
    }, {
      text: 'Sales Change',
      flex: 1,
      producesHTML: true,
      dataIndex: 'salesChange',
      align: 'right',
      sortable: false,
      editor: {
        allowBlank: false
      }
    },
    {
      text: 'Trend',
      flex: 1,
      dataIndex: 'trend',
      xtype: 'widgetcolumn',
      widget: {
        xtype: 'sparklineline',
        tipTpl: 'Sales: {y:number("0.00")}'
      },
      sortable: false
    }
  ],

  listeners: {
    selectionchange: 'onSelectionChange'
  }
});

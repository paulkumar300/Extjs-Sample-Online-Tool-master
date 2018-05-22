Ext.define('SampleOnlineTool.model.Personnel', {
  extend: 'SampleOnlineTool.model.Base',

  fields: [{
      name: 'name',
      type: 'string'
    },
    {
      name: 'status',
      type: 'string'
    },
    {
      name: 'sales',
      type: 'float'
    },
    {
      name: 'salesChange',
      type: 'float'
    },
    {
      name: 'trend',
      calculate: function(data) {
        // Avoid circular dependency by hiding the read of trend value
        var trend = data['trend'] || (data['trend'] = []);

        trend.push(data.sales);

        if (trend.length === 1) {
          //let's start the trend off with a change
          trend.push(data.sales + data.salesChange);
        }

        if (trend.length > 10) {
          trend.shift();
        }

        return trend;
      },

      // It's the same array. But we need Model#set to see it as modified so it
      // is flushed to the UI
      isEqual: function() {
        return false;
      }
    },
  ],
  addSalesTick: function() {
    // Set data, but pass "clean" flag.
    this.set('sales', this.generateNewSales(), {
      dirty: false
    });
  },
  generateNewSales: function() {
    var newSales = Math.abs(this.data.sales + Ext.Number.randomInt(-2345, 2345) / 100);

    return Math.round(newSales * 100) / 100;
  }
});

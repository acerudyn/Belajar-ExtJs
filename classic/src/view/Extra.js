
Ext.define('NPKS.view.Extra', {
  extend : 'Ext.grid.Panel',
  xtype : 'extra',
  title : 'Test Grid',
  height : 300,
  width : 500,
  store : {
    type : 'extraApi'
  },
  plugins: 'gridfilters', // untuk filter
  bbar: {
    xtype: 'pagingtoolbar', // untuk pagination
    displayInfo: true,
  },
  columns : [
    // {text : 'No. Container', dataIndex : 'no_cont', flex : 1},
    // {text : 'Size', dataIndex : 'size', flex : 1},
    // {text : 'Type', dataIndex : 'type', flex : 1},
    // {text : 'Status', dataIndex : 'status', flex : 1},
    // {text : 'Weight', dataIndex : 'weight', flex : 1},
    // {text : 'ISO', dataIndex : 'iso', flex : 1}

    {text : 'Name', dataIndex : 'name', flex : 1,
      filter: {
        type: 'string'
      }
  },
    {text : 'Username', dataIndex : 'username', flex : 1},
    {text : 'Email', dataIndex : 'email', flex : 1},
    {text : 'Phone', dataIndex : 'phone', flex : 1},
    {text : 'Webstite', dataIndex : 'website', flex : 1}
  ],
  id: 'testGrid',
  selModel: {
    injectCheckbox: 'first',
    checkOnly: true,
    model: 'SIMPLE',
    type: 'checkboxmodel'
  },
  buttons: [
    {
      text: 'Select All',
      handler: function(){
        Ext.getCmp('testGrid').getSelectionModel().selectAll();
      }
    },
    {
      text: 'Remove All',
      handler: function(){
        Ext.getCmp('testGrid').getSelectionModel().deselectAll();
      }
    },
    {
      text: 'Get Selected Data',
      handler: function(){
        var data = Ext.getCmp('testGrid').getSelectionModel().getSelection();
        console.warn('data', data);
      }
    }
  ]

})

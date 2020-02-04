
// define path file viewport
Ext.define('NPKS.view.Viewport', {
  extend : 'Ext.container.Viewport',
  id : 'viewport',
  items : [
    {
      region : 'north',
      html : '<h1>Header Section</h1>',
    },
    {
      region : 'center',
      xtype : 'tabpanel',
      activeTab : 0,
      itemId : 'viewport-target',
    },
    {
      region : 'south',
      html : '<h4>Footer Section - All Copy Reserved</h4>',
    },
  ]
})

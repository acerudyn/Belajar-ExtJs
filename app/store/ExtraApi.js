Ext.define('NPKS.store.ExtraApi', {
  extend: 'Ext.data.Store',
  alias: 'store.extraApi',
  proxy: {
    type: 'ajax',
    url: 'https://jsonplaceholder.typicode.com/users'
  },
  autoLoad: true
})

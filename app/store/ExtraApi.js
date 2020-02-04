Ext.define('NPKS.store.ExtraApi', {
  extend: 'Ext.data.Store',
  alias: 'store.extraApi',
  // remoteFilter: true, // untuk memberi akses filter ke servis side
  pageSize: 5, // jumlah data per halaman
  proxy: {
    type: 'ajax',
    url: 'https://jsonplaceholder.typicode.com/users'
  },
  autoLoad: true
})

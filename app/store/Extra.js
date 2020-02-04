
Ext.define('NPKS.store.Extra', {
  extend: 'Ext.data.Store',
  alias: 'store.extra',
  // model: 'NPKS.model.Extra',
  // itemId: 'extra',
  // storeId: 'extra',
  data: {
    items: [
      // { no_cont: 'IBSN0000015', size: "40", type: "DRY", status: "E", weight: "1500", iso: "45G1" },
      // { no_cont: 'IBSN0000016', size: "40", type: "DRY", status: "F", weight: "2000", iso: "45G1" },
      // { no_cont: 'IBSN0000017', size: "40", type: "DRY", status: "E", weight: "2500", iso: "45G1" },
      // { no_cont: 'IBSN0000018', size: "40", type: "DRY", status: "E", weight: "1000", iso: "45G1" }
    ]
  },
  proxy: {
    type: 'memory',
    reader: {
      type: 'json',
      rootProperty: 'items',
    }
  }
})

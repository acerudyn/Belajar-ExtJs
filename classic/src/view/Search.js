Ext.define('NPKS.view.Search', {
  extend: 'Ext.form.Panel',
  title: 'Form Tutorial',
  defaultType: 'textfield',
  items: [
    {
      fieldLabel: 'First Name',
      name: 'firstName'
    },
    {
      fieldLabel: 'Last Name',
      name: 'lastName'
    },
    {
      fieldLabel: 'Email',
      name: 'email'
    },
    {
      fieldLabel: 'DOB',
      name: 'dob',
      xtype: 'datefield'
    }
  ],
  buttons: [
    {
      text: 'Submit',
      handler: function(btn){
        var data = this.up('form');
        console.warn('print form data', data.getForm().getValues());
      }
    }
  ]

})

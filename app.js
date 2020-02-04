/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'NPKS.Application',

    name: 'NPKS',

    requires: [
        // This will automatically load all classes in the NPKS namespace
        // so that application classes do not need to require each other.
        'NPKS.*'
    ],
    launch : function () {
      viewport = Ext.getCmp('viewport');
      target = viewport.down('#viewport-target');
      view = Ext.create('NPKS.view.Extra');
      target.add(view);
    },

    // The name of the initial view to create.
    // mainView: 'NPKS.view.main.Main',
    // mainView: 'NPKS.view.Extra',
    autoCreateViewport : true, // menampilkan viewport.js di folder classic
});

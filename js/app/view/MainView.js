Ext.define('login.view.MainView', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainview',

    requires: [
        'Ext.panel.Panel',
        'Ext.button.Button'
    ],

    itemId: 'mainView',
    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'north',
                    height: 100,
                    itemId: 'headerPanel',
                    title: 'Header',
                    dockedItems: [
                        {
                            xtype: 'panel',
                            dock: 'right',
                            itemId: 'loginPanel',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'loginButton',
                                    margin: 6,
                                    text: 'Login'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'registerButton',
                                    margin: 5,
                                    text: 'Register'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            dock: 'right',
                            hidden: true,
                            itemId: 'logoutPanel',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'logoutButton',
                                    margin: 6,
                                    text: 'Logout'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    itemId: 'contentPanel',
                    title: 'Content'
                }
            ]
        });

        me.callParent(arguments);
    }

});
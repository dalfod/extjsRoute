Ext.define('login.view.RegisterForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.registerform',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    height: 250,
    itemId: 'registerForm',
    width: 400,
    title: 'Register',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    itemId: 'form',
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            margin: '0 0 10 0',
                            fieldLabel: 'Name',
                            labelAlign: 'right',
                            msgTarget: 'title',
                            name: 'name',
                            allowBlank: false,
                            blankText: 'Enter your full name.'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            margin: '0 0 10 0',
                            fieldLabel: 'Email',
                            labelAlign: 'right',
                            msgTarget: 'title',
                            name: 'email',
                            allowBlank: false,
                            blankText: 'Enter your email.'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            margin: '0 0 10 0',
                            fieldLabel: 'Username',
                            labelAlign: 'right',
                            msgTarget: 'title',
                            name: 'username',
                            allowBlank: false,
                            blankText: 'Choose a password.'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            margin: '0 0 10 0',
                            fieldLabel: 'Password',
                            labelAlign: 'right',
                            msgTarget: 'title',
                            name: 'password',
                            allowBlank: false,
                            blankText: 'Choose a password.'
                        },
                        {
                            xtype: 'button',
                            formBind: true,
                            itemId: 'registerButton',
                            scale: 'medium',
                            text: 'Register'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});
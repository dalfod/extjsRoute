Ext.define('login.view.LoginForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.loginform',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    height: 200,
    itemId: 'loginForm',
    shrinkWrap: 3,
    manageHeight: false,
    title: 'Login',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    itemId: 'form',
                    bodyPadding: 20,
                    items: [
                        {
                            xtype: 'textfield',
                            margin: '0 0 20 0',
                            fieldLabel: 'Username',
                            labelAlign: 'right',
                            msgTarget: 'title',
                            name: 'identity',
                            allowBlank: false,
                            blankText: 'Enter your Username.',
                            regexText: 'Enter your username.'
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 10 0',
                            fieldLabel: 'Password',
                            labelAlign: 'right',
                            msgTarget: 'title',
                            name: 'password',
                            inputType: 'password',
                            allowBlank: false,
                            blankText: 'Enter your password.'
                        },
                        {
                            xtype: 'button',
                            formBind: true,
                            itemId: 'loginButton',
                            margin: '0 15 0 0',
                            scale: 'medium',
                            text: 'Login'
                        },
                        {
                            xtype: 'button',
                            formBind: true,
                            itemId: 'registerButton',
                            margin: '0 15 0 0',
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
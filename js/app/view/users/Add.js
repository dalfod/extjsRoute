Ext.define('APP.view.users.Add', {
    extend: 'Ext.window.Window',

    alias: 'widget.usersAdd',

    requires: ['Ext.form.Panel', 'Ext.form.field.ComboBox'],

    defaultGroups: [
        [0, 'guest'],
        [1, 'user'],
        [2, 'moderator'],
        [3, 'admin']
    ],
    title: 'Add User',
    closeAction: 'hide',
    iconCls: 'users add',
    layout: 'fit',
    width: 500,
    heigth: 400,
    initComponent: function() {
        Ext.apply(this, {
            border: false,
            buttons: [{
                text: 'Reset',
                action: 'reset'
            },{
                text: 'Cancel',
                scope: this,
                handler: this.close
            },{
                text: 'Submit',
                action: 'submit'
            }],

            items: [{
                xtype: 'form',
                monitorValid: true,
                autoScroll: true,
                url: '/users',
                trackResetOnLoad: true,
                defaults: {
                    'allowBlank': false
                },
                bodyStyle: 'padding: 10px;',
                items: [
                {
                    xtype: 'fieldset',
                    title: 'User',
                    defaults: {
                        'allowBlank': false
                    },
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Login',
                        anchor: '100%',
                        name: 'login'
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Password',
                        anchor: '100%',
                        name: 'password',
                        inputType: 'password'
                    },{
                        itemId: 'group',
                        fieldLabel: 'Group',
                        xtype: 'combo',
                        store: this.defaultGroups,
                        getInnerTpl: function() {
                            return '<div class="feed-picker-url">{field1}</div><div class="feed-picker-title">{field2}</div>';
                        }
                    }]
                },{
                    xtype: 'fieldset',
                    title: 'Details',
                    defaults: {
                        'allowBlank': false
                    },
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Name',
                        anchor: '100%',
                        name: 'name'
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Surname',
                        anchor: '100%',
                        name: 'surname'
                    },{
                        xtype: 'textfield',
                        fieldLabel: 'Email',
                        anchor: '100%',
                        name: 'email'
                    },{
                        xtype: 'hidden',
                        fieldLabel: 'Avatar',
                        anchor: '100%',
                        inputType: 'file',
                        name: 'avatar'
                    }]
                }]
            }]
        });

        this.callParent(arguments);
    }
});

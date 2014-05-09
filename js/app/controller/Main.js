Ext.define('APP.controller.Main', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'loginPanel',
            selector: 'mainview #loginPanel'
        },
        {
            ref: 'logoutPanel',
            selector: 'mainview #logoutPanel'
        }
    ],

    showLogin: function(target) {

        // Create new login form window
        var login = Ext.create("widget.loginform");

        // Show window
        login.show();

    },

    doLogin: function(button, e, eOpts) {
        var form = button.up('form'),			// Login form
            formWindow = button.up('window'),		// Login form window
            values = form.getValues(),			// Form values
            loginPanel = this.getLoginPanel(),		// Panel shown when logged out
            logoutPanel = this.getLogoutPanel();	// Panel shown when logged in

        // Success
        var successCallback = function(resp, ops) {
            alert("login succes");
            return;
            // Hide login panel
            loginPanel.hide();

            // Show logout panel
            logoutPanel.show();

            // Close window
            formWindow.destroy();

        };

        // Failure
        var failureCallback = function(resp, ops) {

            // Show login failure error
            Ext.Msg.alert("Login Failure", resp);

        };


        // TODO: Login using server-side authentication service
        // Ext.Ajax.request({
        //        url: "/login",
        //        params: values,
        //        success: successCallback,
        //        failure: failureCallback
        // });

        // Just run success for now
        successCallback();
    },

    showRegister: function(target) {

        // Create new register form window
        var register = Ext.create("widget.registerform");

        // Show window
        register.show();

    },

    doRegister: function(button, e, eOpts) {

        var form = button.up('form'),			// Register form
            formWindow = button.up('window'),		// Register form window
            values = form.getValues(),			// Form values
            loginPanel = this.getLoginPanel(),		// Panel shown when logged out
            logoutPanel = this.getLogoutPanel();	// Panel shown when logged in

        // Success
        var successCallback = function(resp, ops) {

            // Hide login panel
            loginPanel.hide();

            // Show logout panel
            logoutPanel.show();

            // Close window
            formWindow.destroy();

        };

        // Failure
        var failureCallback = function(resp, ops) {

            // Show registration failure error
            Ext.Msg.alert("Registration Failure", resp);

        };


        // TODO: Register using server-side registration service
        // Ext.Ajax.request({
        //        url: "/register",
        //        params: values,
        //        success: successCallback,
        //        failure: failureCallback
        // });

        // Just run success for now
        successCallback();

    },

    init: function(application) {
        this.control({
            "loginform #loginButton": {
                click: this.doLogin
            },
            "loginform #registerButton": {
                click: this.showRegister
            },
            "registerform #registerButton": {
                click: this.doRegister
            }
        });
    }

});

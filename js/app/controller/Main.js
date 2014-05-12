Ext.define('APP.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.window.MessageBox'
    ],
    views: [
        'LoginForm',
        'RegisterForm'
    ],
    refs: [
        {
            ref: 'loginForm',
            selector: 'loginform'
        },
        {
            ref: 'registerForm',
            selector: 'registerform'
        }
    ],

    showLogin: function(show) {
        show = show !== false;
        var loginForm = this.getLoginForm();
        
        if (!loginForm) {
            loginForm = Ext.create("widget.loginform");
        }
        
        if (show) {
            // Show window
            loginForm.show();
            this.showRegister(false);
        } else {
            // Hide window
            loginForm.hide();
        }
        
        return false;
    },
    
    showRegister: function(show) {
        show = show !== false;
        var registerForm = this.getRegisterForm();
        
        if (!registerForm) {
            registerForm = Ext.create("widget.registerform");
        }
        
        if (show) {
            // Show window
            registerForm.show();
            this.showLogin(false);
        } else {
            // Hide window
            registerForm.hide();
        }

        return false;
    },

    doLogin: function(button, e, eOpts) {
        var form = button.up('form'),		// Login form
            formWindow = button.up('window'),	// Login form window
            values = form.getValues(),		// Form values
            loginForm = this.getLoginForm();

        // Success
        var successCallback = function(resp, ops) {
            var data;
            try {
                data = JSON.parse(resp.responseText);
            } catch (ex) {
//                console.log(resp.responseText);
            }
//            console.log(data);
            // Hide login panel
            loginForm.hide();

            // Close window
            formWindow.destroy();
            Ext.History.add('dashboard/view');
        };

        // Failure
        var failureCallback = function(resp, ops) {
            // Show login failure error
            Ext.Msg.alert("Login Failure", resp);

        };

        // TODO: Login using server-side authentication service
        Ext.Ajax.request({
               url: "http://localhost/dummy.php",
               params: values,
               disableCaching: true,
               success: successCallback,
               failure: failureCallback
        });
        
        return false;
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

        return false;
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
            },
            "registerform #registerCancelButton": {
                click: this.showLogin
            }
        });
    }

});

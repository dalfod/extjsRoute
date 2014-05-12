Ext.define('APP.controller.Dashboard', {
    extend: 'Ext.app.Controller',
    
    views: [
        'Dashboard'
    ],
    refs: [
        {
            ref: 'dashboard',
            selector: 'dashboard'
        }
    ],
    
    doLogout: function(button, e, eOpts) {
        var dashboard = this.getDashboard();	// Panel shown when logged out

        // Success
        var successCallback = function(resp, ops) {

            var data;
            if (resp) {
                try {
                    data = JSON.parse(resp.responseText);
                } catch (ex) {
//                    console.log(resp.responseText);
                }
            }
//            console.log(data);
            // Hide dashboard
            dashboard.hide();
            
            Ext.History.add('main/showLogin');
        };

        // Failure
        var failureCallback = function(resp, ops) {

            // Show registration failure error
            Ext.Msg.alert("Logout Failure", resp);

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
        var dashboard = this.getDashboard();
        
        if (dashboard) {
            dashboard.hide();
        }
        
        this.control({
            "dashboard #logoutButton": {
                click: this.doLogout
            }
        });
    },
    
    view: function() {
        var dashboard = this.getDashboard();
        
        if (!dashboard) {
            dashboard = Ext.create("widget.dashboard");
        }
        
        // Show window
        dashboard.show();
    }
});

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

    init: function(application) {
        var dashboard = this.getDashboard();
        
        if (dashboard) {
            dashboard.hide();
        }
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

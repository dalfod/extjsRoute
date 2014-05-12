// enable loader
Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'App': 'js/app',
        'Util': 'js/app/util'
    }
});

// enable state
Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

Ext.Ajax.defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Accept-Charset': 'utf-8'
};

Ext.application({
    name: 'APP',
    appFolder: 'js/app',
    paths: {
        'Ext.ux': '../lib/examples/ux'
    },
    controllers: [
        'Users',
        'Viewport',
        'Dashboard',
        'Page'
    ],
    requires: ['Util.Router'],
    currentController: null,
    Router: {},
    launch: function() {
        // initialize utils
        Ext.apply(this.Router, Ext.create('Util.Router'));
        // set routes
        this.Router.draw(function(map) {
            map.connect(':controller/:action');
        });
        // init history
        Ext.History.init(this.initDispatch, this);
        // set listener to change event of history token
        Ext.History.on('change', this.historyChange, this);
    },
    initDispatch: function() {
        this.historyChange(Ext.History.getToken());
    },
    historyChange: function(token) {
        console.log(token);
        // and check if token is set
        if (token) {
            Ext.History.add(token, true);
            this.dispatch(this.Router.recognize(token));
        } else {
            this.dispatch(this.Router.recognize("main/showLogin"));
        }
    },
    dispatch: function(config) {
        if (!config) {
            console.log('undefined config ' + config);
            return;
        }

        // get the specific controller
        var controllerName = Ext.String.capitalize(config.controller),
                controller;

        if (this.controllers.keys.indexOf(controllerName) === -1) {
            console.log('Cannot found controller ' + controllerName);
            controllerName = config.controller = "Main";
        }
        
        controller = this.getController(controllerName);
        
        if (!controller) {
            return;
        }
        // save controllers onLaunch function if defined
        var onLaunch = controller.onLaunch;

        // prototype new onLaunch, where we dispatch the action which was called
        controller.onLaunch = function(app) {
            // !IMPORTANT call init method of controller
            this.init(app);
            // also call the base functionality of onlaunch
            onLaunch(app);
            if (typeof(this[config.action]) === "function") {
                // call function
                this[config.action]();
            } else {
                console.log('controller ' + controllerName + " doesn\'t have action " + config.action);
            }
        };
        
        // check if application was launched before
        // this determines if the controller was loaded while running the app
        if (this.launched) {
            // if the application was launched, call the onLaunch manually
            controller.onLaunch();
        }
    },
    getViewport: function() {
        return Ext.getCmp('app-viewport');
    }
});
requirejs.config({
  enforceDefine:true,
  paths: {
    jquery: ["http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min"],
    underscore: 'underscore',
    backbone: 'backbone',
    routes: '../js/router',
    Template: '../apps/test/templates/'
    //application: 'application'
  },
  // Shim declaration
  shim: {
    underscore: {
      'exports': '_'
    },
    backbone: {
      'deps': ['jquery', 'underscore'],
      'exports': 'Backbone'

    },
  }
});


require([

  // Load our appplication module and pass it to our definition function
  'application',
], function(application){
  // The "app" dependency is passed in as "App"
  
});


define(["jquery", "underscore", "backbone"],
    function ($, _, Backbone) {
        console.log("Test output");
        console.log("$: " + typeof $);
        console.log("_: " + typeof _);
        console.log("Backbone: " + typeof Backbone);
    }
);
define([
  'jquery',
  'underscore',
  'backbone'
  //'../test/models'
], function($, _, Backbone) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '': 'index',
      'aneurysmlist': 'showAneurysm'
    },
 
    index: function(){
       console.log("The Index route has been called..");
       
    },
    showAneurysm: function(){
      console.log("aneurysmlist route has been called..");
    }

    });
  var app_router = new AppRouter;
  Backbone.history.start();
});
      

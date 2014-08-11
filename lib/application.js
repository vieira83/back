define(['jquery', 
    'underscore',
    'backbone',
    '../apps/test/AneurysmView'
   ], function($, _, Backbone, AneurysmView){
	
TestApp = window.TestApp || {
	    Models: {},
	    Collections: {},
	    Routers: {},
	    Views: {}
  }  
 $(function() {
       TestApp.init = function () {
			alert("herer");
			var AppView = new TestApp.View ();
		};
    });
	
	return TestApp;
});


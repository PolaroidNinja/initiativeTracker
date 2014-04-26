angular.module('app').config(function($routeProvider){
	
	$routeProvider
		.when('/',{
			controller:'homepage',
			templateUrl:'/app/homepage.html'
		})
		.when('/signed-in',{
			controller:'games',
			templateUrl:'/app/games.html'
		})
		.otherwise({
			redirectTo:'/'
		});
});
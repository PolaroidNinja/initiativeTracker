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
		.when('/play/:gameID',{
			controller:'play',
			templateUrl: "/app/play.html"
		})
		.otherwise({
			redirectTo:'/'
		});
});
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

app.filter('orderObjectBy', function(){
 return function(input, attribute) {
 	var reverse = false;
    if (!angular.isObject(input)) return input;

    if(attribute.substring(0,1) === "-"){
		reverse = true;
		attribute = attribute.substr(1);
    }

    var array = [];
    for(var objectKey in input) {
        array.push(input[objectKey]);
    }

    array.sort(function(a, b){
        a = parseInt(a[attribute]);
        b = parseInt(b[attribute]);
        return a - b;
    });
    return (reverse === true) ? array.reverse() : array;
 }
});
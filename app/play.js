angular.module('app').controller('play', ['$scope', '$location', '$routeParams', '$firebase' ,function($scope, $location, $routeParams, $firebase){
	$scope.gameID = $routeParams.gameID;
}]);
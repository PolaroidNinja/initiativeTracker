angular.module('app').controller('homepage', ['$scope', '$location', function($scope, $location){
	$scope.location = $location;
}]);
angular.module('app').controller('games', ['$scope', '$location' ,function($scope, $location){
	if(!$scope.auth.user) {
		$location.path('/');
		$scope.alert.class = "danger";
		$scope.alert.message = "Please sign in to view your games";
	}
}]);
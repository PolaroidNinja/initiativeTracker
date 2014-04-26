angular.module('app').controller('games', ['$scope', '$location', '$firebase' ,function($scope, $location, $firebase){
	if(!$scope.auth.user) {
		$location.path('/');
		$scope.alert.class = "danger";
		$scope.alert.message = "Please sign in to view your games";
	}

	var ref = new Firebase('https://initative.firebaseio.com/');
	$scope.firebase = $firebase(ref);

	$scope.addGame = function() {
		if(!this.showAddForm) {
			this.showAddForm = true;
		}else {
			this.showAddForm = false;
			alert('add game');
		}
	}

}]);
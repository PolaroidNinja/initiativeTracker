angular.module('app').controller('games', ['$scope', '$location', '$firebase' ,function($scope, $location, $firebase){
	if(!$scope.auth.user) {
		$location.path('/');
		$scope.alert.class = "danger";
		$scope.alert.message = "Please sign in to view your games";
		return false;
	}

	var ref = new Firebase('https://initative.firebaseio.com/');
	$scope.firebase = $firebase(ref);

	$scope.list = {
		numenera: "Numenera",
		dresden: "Dresden",
		foo:"Foo"
	};

	$scope.addGame = function() {
		if(!this.showAddForm) {
			this.showAddForm = true;
		}else {
			this.showAddForm = false;
			this.newGame.user = this.auth.user.id;
			var gameRef = this.firebase.$child('games');
			gameRef.$add(this.newGame,function(){
				$scope.alert.class = "success";
				$scope.alert.message = "Game Created Successfully!";
			});
		}
	}

}]);
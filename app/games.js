angular.module('app').controller('games', ['$scope', '$location', '$firebase' ,function($scope, $location, $firebase){
	if(!$scope.auth.user) {
		$location.path('/');
		$scope.alert.class = "danger";
		$scope.alert.message = "Please sign in to view your games";
		return false;
	}

	var ref = new Firebase('https://initative.firebaseio.com/');
	$scope.firebase = $firebase(ref);

	$scope.addGame = function() {
		var gameRef,
			newGameRef,
			newGameName;


		if(!this.showAddForm) {
			this.showAddForm = true;
		}else {
			this.showAddForm = false;
			this.newGame.user = this.auth.user.id;
			gameRef = this.firebase.$child('games');
			newGameRef = gameRef.$add(this.newGame,function(){
				$scope.alert.class = "success";
				$scope.alert.message = "Game Created Successfully!";
			});
			newGameName = newGameRef.name();
			newGameRef.update({'gid':newGameName});
		}
	}

}]);
angular.module('app').controller('play', ['$scope', '$location', '$routeParams', '$firebase' ,function($scope, $location, $routeParams, $firebase){
	$scope.gameID = $routeParams.gameID;

	var ref = new Firebase('https://initative.firebaseio.com/games/' + $scope.gameID);
	var upSort = {"icon": 'up', "sort": "-initiative"};
	var dwnSort = {"icon": 'down', "sort": "initiative"};
	$scope.firebase = $firebase(ref);
	$scope.orderType = upSort;

	$scope.addParticipant = function() {
		var newParticipant = {
			"name": $scope.participantName,
			"initiative": $scope.participantInit
		};
		if(!this.showAddForm) {
			this.showAddForm = true;
		}else {
			ref.child('participants').push(newParticipant);
			this.showAddForm = false;
		}
	}

	$scope.changeSort = function(){
		if(this.orderType == upSort){
			this.orderType = dwnSort;
		}else {
			this.orderType = upSort;
		}
	}
}]);
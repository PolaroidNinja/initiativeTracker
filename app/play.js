angular.module('app').controller('play', ['$scope', '$location', '$routeParams', '$firebase', '$filter' ,function($scope, $location, $routeParams, $firebase, $filter){
	$scope.gameID = $routeParams.gameID;

	var ref = new Firebase('https://initative.firebaseio.com/games/' + $scope.gameID + '/participants');
	var sync = $firebase(ref);
	var orderBy = $filter('orderBy');

	var participants = sync.$asArray();
	participants.$loaded().then(function(){
		console.log(participants);
		order( 'initiative' , false);
	});

	$scope.addParticipant = function() {
		var newParticipant = {
			"name": $scope.participantName,
			"initiative": parseInt($scope.participantInit)
		};
		if(!this.showAddForm) {
			this.showAddForm = true;
		}else {
			ref.child('participants').push(newParticipant);
			this.showAddForm = false;
		}
	}

	var order = function(predicate, reverse){
		var pa = orderBy(participants, predicate, reverse);
		$scope.participantsArray = pa;
	}

	$scope.order = order;
}]);
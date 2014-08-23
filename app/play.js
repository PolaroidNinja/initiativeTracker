angular.module('app').controller('play', ['$scope', '$location', '$routeParams', '$firebase', '$filter' , 'game'
	,function($scope, $location, $routeParams, $firebase, $filter, $game){
	var gameID = $routeParams.gameID;
	var orderBy = $filter('orderBy');
	var participants = $game.setId(gameID).participants.get().$asObject();
	var displayArray = $game.participants.get().$asArray();

	displayArray.$loaded().then(function(){
		order( 'initiative' , true);
		$game.participants.getByName('Leo').then(function(e){
			console.log(e);
		});
	});

	$scope.addParticipant = function() {
		var newParticipant = {
			"name": $scope.participantName,
			"initiative": parseInt($scope.participantInit)
		};
		if(!this.showAddForm) {
			this.showAddForm = true;
		}else {
			$game.participants.add(newParticipant);
			this.showAddForm = false;
		}
	}

	var order = function(predicate, reverse){
		var pa = orderBy(displayArray, predicate, reverse);
		$scope.participantsArray = pa;
	}

	$scope.order = order;
}]);
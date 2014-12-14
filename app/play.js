angular.module('app').controller('play', ['$scope', '$location', '$routeParams', '$firebase', '$filter' , 'gameService'
	,function($scope, $location, $routeParams, $firebase, $filter, gameService){
	var gameID = $routeParams.gameID;
	var orderBy = $filter('orderBy');
	var participants = gameService.setId(gameID).participants.get().$asObject();
	var displayArray = gameService.participants.get().$asArray();

	displayArray.$loaded().then(function(){
		order( 'initiative' , true);
		gameService.participants.getByName('Leo').then(function(e){
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

	$scope.sorted = function($item, $partFrom, $partTo, $indexFrom, $indexTo) {
		console.log($item);
		console.log($partFrom);
		console.log($partTo);
		console.log($indexFrom);
		console.log($indexTo);
	}

	$scope.order = order;
}]);
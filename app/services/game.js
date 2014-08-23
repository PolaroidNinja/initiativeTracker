app.factory('game', function($firebase, $q){

	var game = {};
	
	game._baseURL = 'https://initative.firebaseio.com/games/'	
	game._gameID = null;

	game.setId = function(gid) {
		this._gameID = gid;
		return this;
	}

	game.getId = function(){ 
		if( this._gameID !== null ) {
			return this._gameID;
		}
		throw new Error('Please first set an ID for this game!');
	};

	game.getRef = function(){
		var ref = new Firebase( this._baseURL + this._gameID );
	    return $firebase(ref);
	}

	game.participants = {};

	game.participants.parent = game;
	game.participants.instance = null;

	game.participants.get =function(){
		if(this.instance == null) {
			var ref = new Firebase( this.parent._baseURL + this.parent.getId() + "/participants" );
    		this.instance = $firebase(ref);
    	}

    	return this.instance;
	};

	game.participants.getByName = function(name) {
		var participants = this.get().$asObject();
		var defer = $q.defer();

		participants.$loaded().then(function(){
			delete participants.$priority;
			var found = _.where(participants, {"name" : name});
			defer.resolve(found);
		});
		
		return defer.promise;
	};

	game.participants.add = function(data) {
		if(data == null || !data.name || !data.initiative || typeof data.initiative !== 'number') {
			throw new Error('Please pass an object with a name and initative value.')
		}

		var sync = this.get();
		return sync.$push(data);
	}

	return game;
	
});
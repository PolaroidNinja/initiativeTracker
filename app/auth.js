app.controller('AuthCtrl', [
  '$scope', '$rootScope', '$firebaseAuth', '$location', function($scope, $rootScope, $firebaseAuth, $location) {
    var ref = new Firebase('https://initative.firebaseio.com/');
    $rootScope.auth = $firebaseAuth(ref);
    
    $scope.signIn = function () {
      $rootScope.auth.$login('password', {
        email: $scope.email,
        password: $scope.password
      }).then(function(user) {
        $rootScope.alert.message = '';
        //continue here.
      }, function(error) {
        if (error = 'INVALID_EMAIL') {
          console.log('email invalid or not signed up — trying to sign you up!');
          $scope.signUp();
        } else if (error = 'INVALID_PASSWORD') {
          console.log('wrong password!');
        } else {
          console.log(error);
        }
      });
    }

    $scope.signUp = function() {
      $rootScope.auth.$createUser($scope.email, $scope.password, function(error, user) {
        if (!error) {
          $rootScope.alert.class = 'success';
          $rootScope.alert.message = 'Signed in.';
        } else {
          $rootScope.alert.class = 'danger';
          $rootScope.alert.message = 'The username and password combination you entered is invalid.';
        }
      });
    }

    $scope.signOut = function() {
    	$rootScope.alert.class = 'success';
    	$rootScope.alert.message = "Signed out."
    	$rootScope.auth.$logout();
    	$location.path('/');
    }
  }
]);
app = angular.module('app', ['ngRoute','firebase']);

app.controller('AlertCtrl', [
  '$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.alert = {};
  }
]);

app = angular.module('app', ['ngRoute','firebase', 'angular-sortable-view']);

app.controller('AlertCtrl', [
  '$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.alert = {};
  }
]);

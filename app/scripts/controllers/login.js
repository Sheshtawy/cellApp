'use strict';

/**
 * @ngdoc function
 * @name cellApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the cellApp
 */
angular.module('cellApp')
  .controller('LoginCtrl', ['$scope', '$http', '$templateCache', '$location', '$rootScope',
  function($scope, $http, $templateCache, $location, $rootScope) {
  	$rootScope.loginSucceeded= true;
  	$rootScope.sessionId = '';
  	$rootScope.username = '';
  	// params.username = $scope.username;
  	// params.password = $scope.password;
  	$scope.method = 'GET';
  	$scope.url = 'http://localhost:8080/login';
  	

  	$scope.login = function() {
      $scope.code = null;
      $scope.response = null;

      $http({method: $scope.method, url: $scope.url, params: $scope.params}).success(function(data, status) {
          $scope.status = status;
          $scope.data = data;
          $rootScope.sessionId = data.sessionId;
          $rootScope.loginSucceeded = data.loginSucceeded;
          $rootScope.username = $scope.params.username;

        $location.path('/');
        }).error(function(data, status) {
          $scope.data = data || "Request failed";
          $scope.status = status;
          $location.path('/login');
      });
    };








  }]);



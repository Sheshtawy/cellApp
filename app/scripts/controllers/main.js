'use strict';

/**
 * @ngdoc function
 * @name cellApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cellApp
 */
angular.module('cellApp')
  .controller('MainCtrl', function ($scope, $rootScope, $location, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.alert = {
	  "title": "Request is sent successfully",
	  "content": " ",
	  "type": "info"
	};

	// $scope.method = 'GET';
 //  	// $scope.url = 'http://localhost:8080/topsalesorders';
 //  	// $scope.data = {};
  	
 //  	$scope.sMenurl = 'http://localhost:8080/topsalesmen';
 //  	$scope.sMenData = []

  	
 	$scope.response = null;
 	
	$scope.logout = function(){

		$scope.method = 'GET';
	  	$scope.url = 'http://localhost:8080/logout';
	  	


		$http({method: $scope.method, url: $scope.url, params:{sessionid: $rootScope.sessionId}}).success(function(data, status){
		  		
		  				  		

		  		// $scope.labels = labels;
		  		// $scope.data = data;
		  	}).error(function (data, status) {
		  		//TODO: handle api wrong calls or errors
		  		// body...

		  		$rootScope.username = '';
				$rootScope.sessionId = '';
				$rootScope.loginSucceeded = false;
				$location.path('/login');
		  	});

			$rootScope.username = '';
			$rootScope.sessionId = '';
			$rootScope.loginSucceeded = false;
			$location.path('/login');
	};

  });

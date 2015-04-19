'use strict';

angular.module('cellApp')
  .controller('TopSalesCtrl', ['$scope', '$http', '$templateCache', '$location', '$rootScope',
  function($scope, $http, $templateCache, $location, $rootScope) {


  	$scope.method = 'GET';
  	$scope.url = 'http://localhost:8080/topsalesorders';
  	$scope.data = {};


	$http({method: $scope.method, url: $scope.url, params:{sessionid: $rootScope.sessionId}}).success(function(data, status){
	  		
	  		$scope.data = data.data;
	  		

	  		// $scope.labels = labels;
	  		// $scope.data = data;
	  	}).error(function (data, status) {
	  		//TODO: handle api wrong calls or errors
	  		// body...
	  	});

	  	$scope.show = true;
		$scope.toggle = function (){
		 		$scope.show = !$scope.show;

		};

		 $scope.labels = ["Quality", "Price", "Other"];
  		 $scope.data = [300, 500, 100];

  		 

}]);
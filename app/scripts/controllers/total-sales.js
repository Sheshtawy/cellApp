'use strict';

angular.module('cellApp')
  .controller('TotalSalesCtrl', function ($scope, $http, $location, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.method = 'GET';
  	$scope.url = 'http://localhost:8080/salesmandata';
  	 $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];

  // 	var fetch = function(){ 
		// $scope.labels = [];
  // 		$scope.data = [];  		
  // 		return $http({method: $scope.method, url: $scope.url, params:{sessionid: $rootScope.sessionId}}).success(function(data, status){
  // 		var loopData = data.data;
  // 		for (var i = loopData.length - 1; i >= 0; i--) {
  // 			$scope.labels.push(loopData[i][0])
  // 			$scope.data.push(loopData[i][1]);
  		
  // 		};

  // 		// $scope.labels = labels;
  // 		// $scope.data = data;
  // 	}).error(function (data, status) {
  // 		//TODO: handle api wrong calls or errors
  // 		// body...
  // 	});
  // };

  // 		fetch();
  // 		$scope.fetch= fetch
	  	$scope.show = true;
		$scope.toggle = function (){
		 		$scope.show = !$scope.show;

		};





  });

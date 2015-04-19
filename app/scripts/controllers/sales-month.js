'use strict';

/**
 * @ngdoc function
 * @name cellApp.controller:SalesMonthCtrl
 * @description
 * # SalesMonthCtrl
 * Controller of the cellApp
 */
angular.module('cellApp')
  .controller('SalesMonthCtrl', function ($scope, $http, $rootScope) {


    
    $scope.method = 'GET';
  	$scope.url = 'http://localhost:8080/lastyeardata';
  	$scope.labelsMonthly = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    $scope.labelsWeekly = ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6', 'Week7'];
    $scope.labelsDaily = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    $scope.labels = $scope.labelsMonthly;
    $scope.series = ['<i class="fa fa-smile-o"></i>', '<i class="fa fa-frown-o"></i>'];

    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

  	var fetch = function (){
  		$scope.labels = [];
  		$scope.data = [[],];
  		return $http({method: $scope.method, url: $scope.url, params:{sessionid: $rootScope.sessionId}}).success(function(data, status){
  		$scope.rawData = data.data;
  		for (var i = $scope.rawData.length - 1; i >= 0; i--) {
  			$scope.labels.push($scope.rawData[i][0])
  			$scope.data[0].push($scope.rawData[i][1]);
  		};

  		// $scope.labels = labels;
  		// $scope.data = data;
  	}).error(function (data, status) {
  		//TODO: handle api wrong calls or errors
  		// body...
  	});
  	};
  		// fetch();
  		// $scope.fetch = fetch;
  		$scope.show = true;
		$scope.toggle = function (){
		 		$scope.show = !$scope.show;

		};

    $scope.selectedIcon = 'Daily';
    $scope.selectedIcons = ['Weekly', 'Monthly'];
    $scope.icons = [
    {value: 'Daily', label: 'Daily'},
    {value: 'Weekly', label: 'Weekly'},
    {value: 'Monthly', label: 'Monthly'}
  ];


   

    $scope.$watch('selectedIcon',
      function(){
        switch($scope.selectedIcon) {
          case 'Daily':
            $scope.labels = $scope.labelsDaily;
            break;
          case 'Weekly':
            $scope.labels = $scope.labelsWeekly;
            break;
          case 'Monthly':
            $scope.labels = $scope.labelsMonthly;
            break;
          
        };
    });    

    x = 3;
    var x; 

  });

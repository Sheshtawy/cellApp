'use strict';

angular.module('cellApp')
  .controller('TopSalesMenCtrl', ['$scope', '$http', '$templateCache', '$location', '$rootScope',
  function($scope, $http, $templateCache, $location, $rootScope) {


  	$scope.method = 'GET';
  	$scope.url = 'http://localhost:8080/topsalesmen';
  	$scope.data = [];
  	$scope.labelsMonthly = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    $scope.labelsWeekly = ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6', 'Week7'];
    $scope.labelsDaily = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    $scope.labels = $scope.labelsMonthly;


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

	$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
	$scope.series = ['Quality', 'Price', 'Other'];
	$scope.data = [
	    [65, 59, 80, 81, 56, 55, 40],
	    [28, 48, 40, 19, 86, 27, 90],
	    [5, 11, 22, 31, 66, 54, 20]
	  ];

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

}]);
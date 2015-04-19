'use strict';

/**
 * @ngdoc overview
 * @name cellApp
 * @description
 * # cellApp
 *
 * Main module of the application.
 */
angular
  .module('cellApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chart.js',
    'mgcrea.ngStrap',
    'ng'
  ])
  .config(["$routeProvider", "$httpProvider", "$locationProvider", function ($routeProvider, $httpProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/total-sales', {
        templateUrl: 'views/total-sales.html',
        controller: 'TotalSalesCtrl'
      })
      .when('/sales-month', {
        templateUrl: 'views/sales-month.html',
        controller: 'SalesMonthCtrl'
      })
      .when('/top-sales', {
        templateUrl: 'views/top-sales.html',
        controller: 'TopSalesCtrl'
      })
      .when('/top-sales-men', {
        templateUrl: 'views/top-sales-men.html',
        controller: 'TopSalesMenCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  }])
  // .run(['$rootScope', '$location', function($rootScope, $location){;
          
  //    // var auth = function(){
  //    //        if($rootScope.loginSucceeded == true) 
  //    //          return;
  //    //        else if($rootScope.loginSucceeded == false)                 
  //    //          $location.path('/login');
  //    //        if ($location.path() !== '/login')
  //    //          $location.path('/login');
  //    //  };  

  //     // auth();
  //   // $rootScope.$on("$routeChangeStart", function (event, current, next) {
        
  //   //     var index = next.indexOf("/app/#/") + "/app/#/".length;
  //   //     var route = next.slice(index);
  //   //     if (route !== 'login') {
  //   //       auth();
  //   //     }
  //   // }); 
        
    

  // }]);




'use strict';

/**
 * @ngdoc function
 * @name cellApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cellApp
 */
angular.module('cellApp')
  .controller('MainCtrl', ["$scope", "$rootScope", "$location", "$http", function ($scope, $rootScope, $location, $http) {
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

  }]);

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



'use strict';

/**
 * @ngdoc function
 * @name cellApp.controller:SalesMonthCtrl
 * @description
 * # SalesMonthCtrl
 * Controller of the cellApp
 */
angular.module('cellApp')
  .controller('SalesMonthCtrl', ["$scope", "$http", "$rootScope", function ($scope, $http, $rootScope) {


    
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

  }]);

'use strict';

angular.module('cellApp')
  .controller('TotalSalesCtrl', ["$scope", "$http", "$location", "$rootScope", function ($scope, $http, $location, $rootScope) {
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





  }]);

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
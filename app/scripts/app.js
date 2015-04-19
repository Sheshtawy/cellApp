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
  .config(function ($routeProvider, $httpProvider, $locationProvider) {

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
  })
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




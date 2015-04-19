'use strict';

angular.module('cellApp')  
.factory('Auth', function($http, $rootScope, $cookieStore){

	return {
		isloggedin: function(){
			if($rootScope.loginSucceeded == true)
				return loginSucceeded;
			else
				return false

		}
	};
};
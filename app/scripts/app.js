'use strict';

angular
  .module('leftshifApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider,$interpolateProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

	$interpolateProvider.startSymbol('{[{');
	$interpolateProvider.endSymbol('}]}');

	$locationProvider.hashPrefix('!');
	
  });
  

 

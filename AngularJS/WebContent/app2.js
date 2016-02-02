angular.module('MyApp', [ 'ngRoute' ])

.constant('VERSION', '1.1')

.config([ '$routeProvider', function($routeProvider) {
	// some controller code for the home controller
	$routeProvider.when('/', {
		controller : 'HomeCtrl',
		templateUrl : './home.html'
	});
} ])

.config([ '$routeProvider', function($routeProvider) {
	// some controller code for the home controller
	$routeProvider.when('/info', {
		controller : 'InfoCtrl',
		templateUrl : './info.html'
	});
} ])


.controller("HomeCtrl", [ '$scope', function($scope) {
	// some controller code for the home controller
	$scope.title = 'Welcome to homepage!';
	$scope.name = function() {
		return 'this is home page';
	};
} ])


.controller("InfoCtrl", [ '$scope', function($scope) {
	// some controller code for the home controller
	$scope.title = 'Welcome to infopage!';
	$scope.name = function() {
		return 'this is info page';
	};
} ]);


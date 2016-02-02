angular.module('MyApp', [])

.constant('VERSION', '1.1')

.controller("HomeCtrl", [ '$scope', function($scope) {
	// some controller code for the home controller
	$scope.title = 'Welcome to homepage!';
	$scope.name = function() {
		return 'this is home page'
	};
} ]);

/*
 * .config(['$routeProvider',function($routeProvider) { //some controller code
 * for the home controller }]) .controller('InfoCtrl',['$scope',function($scope) {
 * //some controller code for the home controller }])
 */

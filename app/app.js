angular.module('app', []);



// 
// Code for running without a factory
// 

// angular.module('myApp', [])
// 	.controller('hotspotsCtrl', function($scope, $http) {
// 		$http.get('../topspots.json').then(function(response) {
// 			$scope.hotspots = response.data;
// 		});
// 	});
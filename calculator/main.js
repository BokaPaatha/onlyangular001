//Creates a new module called 'myApp'
angular.module('myApp', []);

// Create a controller and give it a sum function.
var calculatorController = function($scope) {
	$scope.sum = function() {
		$scope.result = $scope.number1 + $scope.number2;
	};
};

// Stitch up the controller to the app.
angular.module('myApp')
		.controller('CalculatorController', calculatorController);

// Load the app at document ready.
angular.element(document).ready(function() {
	angular.bootstrap(document, [ 'myApp' ]);
});

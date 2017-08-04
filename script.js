var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
	$scope.tasks = ["Mow Lawn", "Water Flowers", "Clean Room", "Buy Groceries"];

	$scope.addTask = function(task) {
		if ($scope.tasks.includes(task)) {
			clearInput();
		} else {
			$scope.tasks.push(task);
			clearInput();
			document.querySelector("input[ng-model='formTaskInput']").focus();
		}
	}

	$scope.removeItemAt = function(index) {
        $scope.tasks.splice(index, 1);
    }

    function clearInput() {
        $scope.formTaskInput = "";
    }

})
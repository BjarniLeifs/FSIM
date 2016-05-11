app.controller('CompoundCtrl', ['$scope', '$state', '$timeout', 'IndexedFact', 
    function ($scope, $state, $timeout, IndexedFact) {

IndexedFact.getIndexedloan().then(function(response){

    		$scope.indexedLoan =  response.data;

		});
		$scope.test;
		$scope.youPercent;
		$scope.empPercent;
		$scope.mSalary;
		$scope.indexedFloat;
		$scope.indexedFixed;
		$scope.nonIndexedFloat;
		$scope.nonIndexedFixed;
		$scope.aPayment
		$scope.ePayment
		$scope.loanAmount;
		$scope.propertyValue;
		$scope.intresetRate;
		$scope.inflation;
    }
]);
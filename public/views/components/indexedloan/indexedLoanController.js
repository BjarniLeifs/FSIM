app.controller('IndexedLoanCtr', ['$scope', '$state', '$timeout', 'IndexedFact',
    function ($scope, $state, $timeout, IndexedFact) {

    	IndexedFact.getIndexedloan().then(function(response){

    		$scope.indexedLoan =  response.data;

		});
		$scope.test;

    }
]);
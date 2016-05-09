app.controller('IndexedLoanCtr', ['$scope', '$state', '$timeout',
    function ($scope, $state, $timeout) {

    	/* 

    		$scope.einn = FrontFact.einn():

		*/

    	FrontFact.einn().then(function(response){
    		$scope.einn = response.data;
		});

    }
]);
app.controller('FrontCtrl', ['$scope', '$state', 'FrontFact', '$timeout',
    function ($scope, $state, FrontFact, $timeout) {

    	/* 

    		$scope.einn = FrontFact.einn():

		*/

    	FrontFact.einn().then(function(response){
    		$scope.einn = response.data;
		});

    }
]);

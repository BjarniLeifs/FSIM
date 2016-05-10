app.controller('FrontCtrl', ['$scope', '$state', 'FrontFact', '$timeout', '$translate',
    function ($scope, $state, FrontFact, $timeout, $translate) {
		/* Translator */
		$scope.changeLanguage = function (key) {
			$translate.use(key);
		};
    	/* 

    		$scope.einn = FrontFact.einn():

		*/

    	FrontFact.einn().then(function(response){
    		$scope.einn = response.data;
		});

    }
]);

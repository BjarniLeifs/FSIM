app.controller('NavCtrl', ['$scope', '$state', 'FrontFact', '$timeout', '$translate',
    function ($scope, $state, FrontFact, $timeout, $translate) {
		/* Translator */
		$scope.changeLanguage = function (key) {
			$translate.use(key);
		};
    	/* 

    		$scope.einn = FrontFact.einn():

		*/



    }
]);

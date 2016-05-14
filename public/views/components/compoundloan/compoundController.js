app.controller('CompoundCtrl', ['$scope', '$state', '$timeout', 'CompoundFact', '$filter',
    function ($scope, $state, $timeout, CompoundFact, $filter) {
/* Scope variables declared */
   		$scope.principal 	= 20000000; 
   		$scope.duration  	= 480;
   		$scope.interest  	= 7.05;
   		$scope.compoundLoan = [];

/* Global used variables for graphs */
		var log 				= [];
		var payment 			= [];
		var dates 				= [];
		var interest 			= [];
		var capital 			= [];
		var orginalPrincipal 	= [];


/* Object to send to api */

/* Functions */
		$scope.checkLoan = function () {
			log 				= [];
			payment 			= [];
			dates 				= [];
			interest 			= [];
			capital 			= [];
			orginalPrincipal 	= [];
			var sendMe = {
				principal : $scope.principal,
				interest  : $scope.interest,
				duration  : $scope.duration,
			};
		
			getCompoundLoan(sendMe);
			//loadCompoundLoan();
		}

		function getCompoundLoan (obj) {
/* Calls to factory -> API  */
       		CompoundFact.getCompoundloan(obj).then(function (response) {

       			var compoundLoan = response.data;
       			$scope.compoundLoan = response.data;


       			angular.forEach(compoundLoan, function (value, key) {
	            	var convertDate = $filter('date')(value.date, "yyyy-MM-dd");
			  		
			  		log.push({
			  			x : value.id, 
			  			y : Math.round(value.p), date: value.date
			  		});

				});

			}); 

			CompoundFact.getCompoundFinalResult(obj).then(function (results) {
				$scope.loanResult = results.data;	
			});
		}

	}
]);


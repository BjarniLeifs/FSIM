app.controller('CompoundCtrl', ['$scope', '$state', '$timeout', 'CompoundFact', 
    function ($scope, $state, $timeout, CompoundFact) {
   
       	CompoundFact.getCompoundloan(
				{
    				duration  : 480,
    				principal : 16100000,
    				interest  : 7.05
    			}


       		).then(function (response) {
				console.log(response.data);
       			$scope.compound = response.data;

			}); 
    			
    		
	
	}

]);


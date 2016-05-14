/* FrontFactory */
app.factory('CompoundFact', ['$http', 
    function ($http) {
    	
    	return {
    		getCompoundloan : function (request) {
                console.log(request);
        		return $http.post('/compound/compoundloan',request);
            },
            getCompoundFinalResult : function (reque) {
                return $http.post('/compound/compoundLoanFinalResult',reque); 
            },
  
			
		};
	}
]);





/* FrontFactory */
app.factory('IndexedFact', ['$http', 
    function ($http) {
    	
    	return {
    		getIndexedloan : function (request) {
                console.log(request);
        		return $http.post('/indexed/indexloan',request);
            },
            getIndexedLoanDate : function (requet) {
            	return $http.post('/indexed/indexloanDate',requet); 
            },
            getIndexedLoanP : function (req) {
            	return $http.post('/indexed/indexloanP',req); 
            },
            getIndexloanFinalResult : function (reque) {
                return $http.post('/indexed/indexloanFinalResult',reque); 
            },

  
			
		};
	}
]);
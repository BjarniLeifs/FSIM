/* FrontFactory */
app.factory('IndexedFact', ['$http', 
    function ($http) {
    	
    	return {
    		getIndexedloan : function (request) {
                console.log(request);
        		return $http.post('/statistic/indexloan',request);
            },
            getIndexedLoanDate : function (requet) {
            	return $http.post('/statistic/indexloanDate',requet); 
            },
            getIndexedLoanP : function (req) {
            	return $http.post('/statistic/indexloanP',req); 
            },
            getindexloanFinalResult : function (reque) {
                return $http.post('/statistic/indexloanFinalResult',reque); 
            },
            einn : function (test) {
                return $http.post('/statistic/einn',test); 
            },
  
			
		};
	}
]);
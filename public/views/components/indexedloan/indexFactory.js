/* FrontFactory */
app.factory('IndexedFact', ['$http', 
    function ($http) {
    	
    	return {
    		getIndexedloan : function () {
        		return $http.get('/statistic/indexloan');
            },
            getIndexedLoanDate : function () {
            	return $http.get('/statistic/indexloanDate'); 
            },
            getIndexedLoanP : function () {
            	return $http.get('/statistic/indexloanP'); 
            },
            getindexloanFinalResult : function () {
                return $http.get('/statistic/indexloanFinalResult'); 
            },
  
			
		};
	}
]);
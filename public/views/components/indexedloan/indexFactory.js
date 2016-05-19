/* FrontFactory */
app.factory('IndexedFact', ['$http', 
    function ($http) {
    	
    	return {
    		getIndexedloan : function (request) {
        		return $http.post('/indexed/indexloan',request);
            },
            getIndexedLoanDate : function (request) {
            	return $http.post('/indexed/indexloanDate',request); 
            },
            getIndexedLoanP : function (request) {
            	return $http.post('/indexed/indexloanP',request); 
            },
            getIndexloanFinalResult : function (request) {
                return $http.post('/indexed/indexloanFinalResult',request); 
            },
            getIndexloanPaydown : function (request) {
                return $http.post('/indexed/indexloanPayDownPrincipal',request); 
            },
            getIndexloanPaydownFinalResult : function (request) {
                return $http.post('/indexed/indexloanPayDownPrincipalFinalResult',request); 
            },
			
		};
	}
]);
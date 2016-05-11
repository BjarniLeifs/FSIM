/* FrontFactory */
app.factory('IndexedFact', ['$http', 
    function ($http) {
    	
    	return {
    		getIndexedloan : function () {
        		return $http.get('/statistic/indexloan');
            }
		};
	}
]);
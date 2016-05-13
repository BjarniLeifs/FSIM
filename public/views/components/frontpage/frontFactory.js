/* FrontFactory */
app.factory('FrontFact', ['$http', 
    function ($http) {
    	
    	return {
    		einn : function (test) {
        		return $http.post('/statistic/einn', test);
            /*
                .success(function (data) {
        		  return data;
                });
    		*/
            }
		};
	}
]);
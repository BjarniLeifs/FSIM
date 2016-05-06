/* FrontFactory */
app.factory('FrontFact', ['$http', 
    function ($http) {
    	
    	return {
    		einn : function () {
        		return $http.get('/statistic/einn');
            /*
                .success(function (data) {
        		  return data;
                });
    		*/
            }
		};
	}
]);
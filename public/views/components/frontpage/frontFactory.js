/* FrontFactory */

app.factory('FrontFact', ['$http', '$window', 
    function ($http, $window, auth) {
        var factory = {};

        factory.somefunc = function (someobject) {

        	$http.post('/api/something', someobject).success(function (data) {
        		/* Return for message if any. */
            });
        }
    
    return factory;
}]);
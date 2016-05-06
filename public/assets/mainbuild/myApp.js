/*! Made on 06-05-2016 */
/* Angular routing and app declaration */

var app = angular.module('fsimApp', ['ui.router']);

app.config([ '$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        $stateProvider
    /* Main page state starts */
        .state('home', {
            url: '/home',
            templateUrl: 'views/components/frontpage/index.html',
            controller: 'FrontCtrl'
        });

        $urlRouterProvider.otherwise('home');
    }
]);
app.controller('FrontCtrl', ['$scope', '$state', 'FrontFact', '$timeout',
    function ($scope, $state, FrontFact, $timeout) {

    	/* 

    		$scope.einn = FrontFact.einn():

		*/

    	FrontFact.einn().then(function(response){
    		$scope.einn = response.data;
		});

    }
]);
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
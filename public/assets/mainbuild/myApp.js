/*! Made on 05-05-2016 */
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
app.controller('FrontCtrl', ['$scope', '$state',
    function ($scope, $state) {

    }
]);
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
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
        })
        .state('indexedloan', {
            url: '/indexedloan',
            templateUrl: 'views/components/indexedloan/index.html',
            controller: 'IndexedLoanCtr'
        });

        $urlRouterProvider.otherwise('home');
    }
]);
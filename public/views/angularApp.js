/* Angular routing and app declaration */

var app = angular.module('fsimApp', ['ui.router', 'pascalprecht.translate']);

app.config([ '$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$translateProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $translateProvider) {
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
        })
        .state('compoundloan', {
            url: '/compoundloan',
            templateUrl: 'views/components/compoundloan/index.html',
            controller: 'CompoundCtrl'
        })        
        .state('contributors', {
            url: '/contributors',
            templateUrl: 'views/components/contributors/index.html',
            controller: 'ContributorsCtrl'
        });
    
        $urlRouterProvider.otherwise('home');

        
        

        $translateProvider.useStaticFilesLoader({
          prefix: 'views/components/languages/',
          suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');
    }
]);
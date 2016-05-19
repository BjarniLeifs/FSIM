/* Angular routing and app declaration */

var app = angular.module('fsimApp', ['ui.router', 'pascalprecht.translate', 'nvd3']);

app.config([ '$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$translateProvider', 
    function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $translateProvider) {
        $httpProvider.interceptors.push('authInterceptor');
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
        }).state('pension', {
            url: '/pension',
            templateUrl: 'views/components/pension/index.html',
            controller: 'PensionCtrl'
        });
    
        $urlRouterProvider.otherwise('home');

    /* Translator configuration, files are in prefix path below*/

        $translateProvider.useStaticFilesLoader({
          prefix: 'views/languages/',
          suffix: '.json'
        });

        $translateProvider.preferredLanguage('is');
        $translateProvider.useSanitizeValueStrategy('escape');

    /* Angular charts defined option starts here*/


    }
]);
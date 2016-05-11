/*! Made on 11-05-2016 */
/* Angular routing and app declaration */

var app = angular.module('fsimApp', ['ui.router', 'pascalprecht.translate', 'chart.js']);

app.config([ '$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$translateProvider', 'ChartJsProvider', 
    function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $translateProvider, ChartJsProvider) {
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

    /* Translator configuration, files are in prefix path below*/

        $translateProvider.useStaticFilesLoader({
          prefix: 'views/languages/',
          suffix: '.json'
        });

        $translateProvider.preferredLanguage('is');
        $translateProvider.useSanitizeValueStrategy('escape');

    /* Angular charts defined option starts here*/
        ChartJsProvider.setOptions({
            chartColors: ['#FF5252', '#FF8A80'],
            responsive: true
        });
        // Configure all line charts 
        ChartJsProvider.setOptions('line', {
            datasetFill: false
        });

    }
]);
app.controller('CompoundCtrl', ['$scope', '$state', '$timeout',
    function ($scope, $state, $timeout) {


    }
]);
app.controller('ContributorsCtrl', ['$scope', '$state', '$timeout',
    function ($scope, $state, $timeout) {
    	/* Change this url to github */
		$scope.projectUrl = "https://github.com/BjarniLeifs/FSIM";    	

		$scope.contributors = [
			{
				name  : 'Bjarni Kristján Leifsson',
				email : 'bjarnil10@ru.is',
				study : 'MSc Software Engineering',
				school : 'Reykjavík University'
			},
			{
				name  : 'Ísleifur Muggur Jónsson',
				email : 'isleifur14@ru.is',
				study : 'BSc Computer Science',
				school : 'Reykjavík University'
			},
			{
				name  : 'Jacky Mallett',
				email : 'jacky@ru.is',
				study : 'Phd Media Arts and Sciences',
				school : 'Massachusetts Institute of Technology'
			}

		];
    }
]);
app.controller('FrontCtrl', ['$scope', '$state', 'FrontFact', '$timeout', '$translate',
    function ($scope, $state, FrontFact, $timeout, $translate) {
		/* Translator */
		$scope.changeLanguage = function (key) {
			$translate.use(key);
		};
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
app.controller('IndexedLoanCtr', ['$scope', '$state', '$timeout', 'IndexedFact',
    function ($scope, $state, $timeout, IndexedFact) {


    	IndexedFact.getIndexedloan().then(function(response){
    		$scope.indexedLoan = response.data;

		});
	
	
			
		

		$timeout(function(){ console.log($scope.indexedLoan) }, 3000);

  $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series = ['Series A', 'Series B'];

  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];







    }
]);
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
app.controller('NavCtrl', ['$scope', '$state', 'FrontFact', '$timeout', '$translate',
    function ($scope, $state, FrontFact, $timeout, $translate) {
		/* Translator */
		$scope.changeLanguage = function (key) {
			$translate.use(key);
		};
    	/* 

    		$scope.einn = FrontFact.einn():

		*/

    	FrontFact.einn().then(function(response){
    		$scope.einn = response.data;
		});

    }
]);

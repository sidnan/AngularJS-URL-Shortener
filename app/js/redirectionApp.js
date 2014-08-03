//Define an angular module for our app
var redirectionApp = angular.module('redirectionApp', []);
 
redirectionApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/x/:urlId', {
	  templateUrl: 'templates/redirectionTemplate.html',
        controller: 'RedirectionController'
    }).
      otherwise({
        redirectTo: '/x'
      });
}]);
 
 
redirectionApp.controller('RedirectionController', function($scope, $routeParams, $http) {
        	
	//$http.get("http://127.0.0.1:5984/ily_test/"+$routeParams.urlId)
	$http({method: 'GET', url: "http://127.0.0.1:5984/ily_test/"+$routeParams.urlId, cache: true})
	 .then(function(res) {
	  window.location.href = res.data.url;
    });
     
});
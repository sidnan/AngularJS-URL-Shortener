'use strict';

var shortenerApp = angular.module('shortenerApp', []);

shortenerApp.controller('ShortenerController', ['$scope', '$http', function($scope, $http) {
    $scope.save = function(typein) {		
	$http({method: 'GET', url: "http://127.0.0.1:5984/ily_test/_design/find_by_url/_view/urlview?key=%22" + $scope.typein.url + "%22&stale=update_after", cache: true})
	.success(function(data) {
		
		if(data.rows.length==1) {
		// data already exists
	  
		$scope.bubly='http://bit.ly/d/'+data.rows[0].value;
		} else {
			// new data
			
			$scope.typein._id=num_to_base62(9769543786868);//TO DO need to get UUID for the entered URL
				._id + '===url===='+$scope.typein.url);
				$http.post("http://127.0.0.1:5984/ily_test/", $scope.typein)
				.success(function(data) {
					
					$scope.bubly='http://localhost:8080/app/redirector.html#/x/'+$scope.typein._id;
						
								
					
				}).error(function(data) {
					alert("url insert error==="+data);
				});
				
		}
	}).error(function(data) {
		alert('# not found');
	});
		
	};
}]);

var CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
// Randomize CHARS if you dont want people to guess the next url generated
function num_to_base62(n) {
    if(n > 62) {
        return num_to_base62(Math.floor(n / 62)) + CHARS[n % 62];
		
    } else {
        return CHARS[n];
    }
}
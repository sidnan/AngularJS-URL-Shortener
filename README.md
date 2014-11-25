AngularJS-URL-Shortner
======================

#### Example URL Shortener/Redirector using Angular JS and CouchDB

This repo contains source code example for URL Shortener/Redirector App using Angular JS and CouchDB.

## This is helpful to know
* AngularJS basics
* CouchDB basics

## Used
* Apache Tomcat 7.0.52
* AngularJS 1.2.15
* CouchDB 1.5.0


## Technology choice reason
* CouchDB for the HTTP REST API provided by it to CRUD the database/tables
* AngularJS for Two-way data binding, REST Services

## References
* https://docs.angularjs.org/api
* http://wiki.apache.org/couchdb


# Observations

* $http/$resource calling a service triggers $rootScope.$apply() when the request is completed. This $apply inturn triggers a $digest cycle which makes view expression to be re-evaluated, which inturn causes the async function to be called again, and so on. This infinite loop is easily visible when the async callback function access a variable outside it. Example:

```
HTML code:
<input .... title="{{testFn()}}">


JS code:
function testFn() {
	var n = 'test text';
	$http.get().success(function (data){
		**n = data;**
		**return n**
	});
}
```


This infinite loop can sometime be avoided by not using the outside variable. Example:

```
HTML Code:
<input .... title="{{testFn()}}">


JS Code:
function testFn() {
	$http.get().success(function (data){
		**return data**
	});
}
```


This infinite loop can be avoided in all cases by using binding variable. Example:

```
HTML Code:
<input .... title="{{bindedVariable}}" ng-click="testFn()">


JS Code:
function testFn() {
	**$scope.bindedVariable = '...'** //initialize
	$http.get().success(function (data){
		**$scope.bindedVariable = data**
	});
}
```

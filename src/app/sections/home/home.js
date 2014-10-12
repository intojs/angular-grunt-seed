/**
 *  app.home
 */

angular.module('app.home', [
	'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'app/sections/home/home.tpl.html',
        controller: 'HomeCtrl'
    });
}])

.controller('HomeCtrl', ['$scope', function($scope) {

}])

.filter('reverse', function() {
	return function(text) {
		return text.split("").reverse().join("");
	}
});
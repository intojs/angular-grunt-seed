/**
 *  app.aboout
 */

angular.module('app.about', [])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/about', {
        templateUrl: 'app/sections/about/about.tpl.html',
        controller: 'AboutCtrl'
    });
}])

.controller('AboutCtrl', function($scope) {
});
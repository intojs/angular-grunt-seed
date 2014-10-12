angular.module('generated-templates', ['generated-templates']);

angular.module('app', [
	'ngRoute',
	'app.home',
	'app.about',
	'generated-templates'
])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/home'});
}])

.run( function run () {
})

.controller('AppCtrl', ['$scope', '$location', function AppCtrl($scope, $location) {
	$scope.pageTitle = 'Angular App';
}]);
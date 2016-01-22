var app = angular.module('presidentApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/clinton', {
            templateUrl: 'views/clinton.html',
            controller: 'ClintonController'
        })
        .when('/sanders', {
            templateUrl: 'views/sanders.html',  //why is this only views/ whatever//
            controller: 'SandersController'
        })
        .when('/trump', {
            templateUrl: 'views/trump.html',
            controller: 'TrumpController'
        });

    $locationProvider.html5Mode(true);
}]);

app.controller('ClintonController', ['$scope', function($scope) {

}]);

app.controller('SandersController', ['$scope', function($scope) {

}]);

app.controller('TrumpController', ['$scope', function($scope) {

}]);

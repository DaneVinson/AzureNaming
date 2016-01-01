angular.module('appControllers', []).controller('Ctrl', function($scope) {
    $scope.selectedItem;
    $scope.resources = jsonData;
});

angular.module('appConfig', ['ngRoute', 'appControllers']).config(function ($routeProvider) {
    $routeProvider.when('/resources', {
        controller: 'Ctrl',
        templateUrl: './views/resources.html',
    });
    $routeProvider.when('/why', {
        templateUrl: './views/why.html',
    });
    $routeProvider.when('/contact', {
        templateUrl: './views/contact.html',
    });
    $routeProvider.otherwise({ redirectTo: '/resources' });
});

$('[data-toggle="tooltip"]').tooltip({ 'placement': 'bottom' });
        
var app = angular.module('app', ['appControllers', 'appConfig']);

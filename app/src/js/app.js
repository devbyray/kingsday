/**
 * Created by raymons on 27-3-15.
 */
(function(window, document, undefined) {
    console.log('loaded');
})(window, document);

var ngRouteApp = angular.module("ngRouteApp", ['ngRoute']);

ngRouteApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/home.html'
        })
        .when('/home', {
            redirectTo: '/'
        })
        .when('/about', {
            templateUrl: '../views/about.html'
        })
        .when('/contact', {
            templateUrl: '../views/contact.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

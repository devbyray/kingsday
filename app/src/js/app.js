/**
 * Basic application config
 */
(function(window, document, Masonry, undefined) {
    console.log('loaded');
    window.onresize = function(event) {
        setTimeout("masonLayout()",'500');
    };

})(window, document, Masonry);

var app = angular.module("ngRouteApp", ['ngRoute', 'ngResource']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/home', {
            redirectTo: '/'
        })
        .when('/about', {
            templateUrl: 'views/about.html'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html'
        })
        .when('/tweets', {
            templateUrl: 'views/tweets.html',
            controller: 'TweetController'
        })
        .otherwise({
            redirectTo: '/'
        });
});


# Kingsday (Netherlands)

## How to install

1. run `(sudo) npm install`
2. run `gulp`
3. Then go to the browser and paste: "http://localhost:3000/".

## How to start an AngularJS routing app

In this example I already did the setup. But the most important things to do is:

Before you start, checkout this repo first: [How to start an AngularJS app](https://github.com/raymonschouwenaar/angularjs-first-setup)

1. Now include the ngRoute script in your html: [ngRoute source](https://code.angularjs.org/1.3.9/angular-route.js)
2. Give your application a name, in the app.js (`var ngRouteApp = angular.module("ngRouteApp", ['ngRoute']);`) & html (`<html ng-app="ngRouteApp">`). Be carfull that the name inside the angular.module("appName") is the same as the name inside the html ng-app.
3. Add a several html file in the "views" folder. Like home.html, about.html & contact.html.
4. In the app.js we need to create a routeProvider, to let the routes show the right content:
<code><pre>
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
</pre></code>
5. Now add `<ng-view></ng-view>` to the place where the views content needs to be shown.
6. Now if you add home after the url, you will go to the root. When adding about, you see the about content.

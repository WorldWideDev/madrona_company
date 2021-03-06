
var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap'])
console.log('in angular config')
myApp.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'static/partials/home.html',
		controller: 'HomeController',
		controllerAs: 'HC'
	})
    .when('/bowlinggreen', {
        templateUrl: 'static/partials/bowling.html',
        controller: 'HomeController',
        controllerAs: 'HC'
    })
	.when('/bowlinggreen/gallery', {
        templateUrl: 'static/partials/bowling_more.html',
        controller: 'HomeController',
        controllerAs: 'HC'
    })
	.when('/madronaco', {
        templateUrl: 'static/partials/madronaco.html',
        controller: 'HomeController',
        controllerAs: 'HC'
    })
	.when('/contact', {
		templateUrl: 'static/partials/contact.html',
        controller: 'HomeController',
        controllerAs: 'HC'
	})
	.when('/secretgarden', {
		templateUrl: 'static/partials/secret.html',
        controller: 'HomeController',
        controllerAs: 'HC'
	})
	.when('/secretgarden/details', {
		templateUrl: 'static/partials/secret_more.html',
        controller: 'HomeController',
        controllerAs: 'HC'
	})
	.when('/yesler', {
		templateUrl: 'static/partials/yesler.html',
        controller: 'HomeController',
        controllerAs: 'HC'
	})
	.when('/tempus', {
		templateUrl: 'static/partials/tempus.html',
        controller: 'HomeController',
        controllerAs: 'HC'
	})
	.when('/marion', {
		templateUrl: 'static/partials/marion.html',
        controller: 'HomeController',
        controllerAs: 'HC'
	})
	.when('/miller', {
		templateUrl: 'static/partials/miller.html',
        controller: 'HomeController',
        controllerAs: 'HC'
	})
	.otherwise({
		redirectTo: '/'
	})
})
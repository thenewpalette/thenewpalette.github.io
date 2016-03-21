var blogApp = angular.module("blogApp", ['ngRoute'],
  function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'main.html'
    })
    .when('/home', {
      templateUrl: 'main.html'
    })
    .when('/food', {
      templateUrl: 'food.html'
    })
    .when('/design', {
      templateUrl: 'design.html'
    })
    .when('/about-me', {
      templateUrl: 'aboutme.html'
    })

  }); //closes angular module

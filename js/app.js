angular.module('mapleApp', ['ngAnimate', 'ui.router']).config(function($stateProvider, $urlRouterProvider){

  $stateProvider
  //intial states
  .state('landing', {
    url: '/',
    templateUrl: './views/landing.html'
  })
  .state('ageGate',{
    url: '/ageGate',
    templateUrl: './views/ageGate.html'
  })
  //beerHome state with 5 pages
  .state('beerHome', {
    url: '/home',
    templateUrl: './views/beerHome.html'
  })
      .state('about', {
          url: '/home/about',
          templateUrl: './views/about.html'
      })
      .state('beers', {
          url: '/home/beers',
          templateUrl: './views/beers.html'
      })
      .state('fizzy', {
        url: '/home/fizzyDrinks',
        templateUrl: './views/fizzy.html'
      })
      .state('contact', {
        url: '/home/contact',
        templateUrl: './views/contact.html'
      })

    //fizzyHome state with 4 pages
  .state('fizzyHome', {
    url: '/homeFiz',
    templateUrl: './views/fizzyHome.html'
  })
      .state('fizAbout', {
        url: '/homeFiz/about',
        templateUrl: './views/about.html'
      })

      .state('fizFizzy', {
        url: '/homeFiz/fizzyDrinks',
        templateUrl: './views/fizzy.html'
      })
      .state('fizContact', {
        url: '/homeFiz/contact',
        templateUrl: './views/contact.html'
      })


  $urlRouterProvider
      .otherwise('/');
});

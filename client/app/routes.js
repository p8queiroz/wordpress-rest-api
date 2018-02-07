import angular from 'angular'

angular
  .module('app')
  .config(config)

function config ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'home',
      url: '/home',
      templateUrl: './Source/pages/posts.html',
      controller: 'PostListControler',
      controllerAs: 'ctrl'
    })

    .state({
      name: 'company',
      url: '/company',
      templateUrl: './Source/pages/company.html',
      controller: 'CompanyListControler',
      controllerAs: 'ctrl'
    })
    
  $urlRouterProvider.otherwise('/home')
}

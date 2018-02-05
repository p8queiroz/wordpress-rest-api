import angular from 'angular'

angular
  .module('app')
  .config(config)

function config ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'Home',
      url: '/home',
      templateUrl: './Source/pages/home.html',
      controller: 'PostListControler',
      controllerAs: 'ctrl'
    })
    
  $urlRouterProvider.otherwise('/home')
}

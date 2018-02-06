import angular from 'angular'

angular
  .module('app')
  .config(config)

function config ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'Home',
      url: '/home',
      templateUrl: './Source/pages/posts.html',
      controller: 'PostListControler',
      controllerAs: 'ctrl'
    })

    .state({
      name: 'Post',
      url: '/post',
      templateUrl: './Source/pages/home.1.html',
      controller: 'PostControler',
      controllerAs: 'ctrl'
    })
    
  $urlRouterProvider.otherwise('/home')
}

import angular from 'angular'

angular
  .module('app')
  .config(config)

function config ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'home',
      url: '/home',
      templateUrl: './Source/pages/home/list.html',
      controller: 'HomeControler',
      controllerAs: 'ctrl'
    })

    .state({
      name: 'post',
      url: '/post',
      templateUrl: './Source/pages/post/list.html',
      controller: 'PostListControler',
      controllerAs: 'ctrl'
    })
    
    .state({
      name: 'company',
      url: '/company',
      templateUrl: './Source/pages/company/list.html',
      controller: 'CompanyListControler',
      controllerAs: 'ctrl'
    })

    .state({
      name: 'companysave',
      url: '/companysave',
      templateUrl: './Source/pages/company/save.html',
      controller: 'CompanyControler',
      controllerAs: 'ctrl'
    })
    
  $urlRouterProvider.otherwise('/home')
}

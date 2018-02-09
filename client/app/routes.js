import angular from 'angular'

angular
  .module('app')
  .config(config)

function config ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'home',
      url: '/home',
      templateUrl: './Source/pages/home/index.html',
      controller: 'HomeControler',
      controllerAs: 'ctrl'
    })

    .state({
      name: 'post',
      url: '/post',
      templateUrl: './Source/pages/post/index.html',
      controller: 'PostListControler',
      controllerAs: 'ctrl'
    })
    
    .state({
      name: 'company',
      url: '/company',
      templateUrl: './Source/pages/company/index.html',
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
    
    .state({
      name: 'sample',
      url: '/sample',
      templateUrl: './Source/pages/sample/index.html',
      controller: 'SampleController',
      controllerAs: 'ctrl'
    })

    .state({
      name: 'modal',
      url: '/modal',
      templateUrl: './Source/pages/modal/modal1.html',
      controller: 'ModalController',
      controllerAs: 'ctrl'
    })

  $urlRouterProvider.otherwise('/home')
}

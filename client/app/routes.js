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
      controllerAs: 'vm'
    })

    .state({
      name: 'post',
      url: '/post',
      templateUrl: './Source/pages/post/index.html',
      controller: 'PostListControler',
      controllerAs: 'vm'
    })
    
    .state({
      name: 'company',
      url: '/company',
      templateUrl: './Source/pages/company/index.html',
      controller: 'CompanyListControler',
      controllerAs: 'vm'
    })

    .state({
      name: 'companysave',
      url: '/companysave',
      templateUrl: './Source/pages/company/save.html',
      controller: 'CompanyControler',
      controllerAs: 'vm'
    })
    
    .state({
      name: 'sample',
      url: '/sample',
      templateUrl: './Source/pages/sample/index.html',
      controller: 'SampleController',
      controllerAs: 'vm'
    })

    .state({
      name: 'modal',
      url: '/modal',
      templateUrl: './Source/pages/modal/modal1.html',
      controller: 'ModalController',
      controllerAs: 'vm'
    })

    .state({
      name: 'user',
      url: '/user',
      templateUrl: './Source/pages/user/index.html',
      controller: 'UserController',
      controllerAs: 'vm'
    })

  $urlRouterProvider.otherwise('/home')
}

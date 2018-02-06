import angular from 'angular'
import '@uirouter/angularjs'
import 'angular-ui-bootstrap'
import 'angular-cookies'

angular
  .module('app', [
    'ui.bootstrap', 
    'ui.router',
    'ngCookies'
  ])

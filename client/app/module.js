import angular from 'angular'
import '@uirouter/angularjs'
import 'angular-animate'
import 'ng-sanitize'
import 'angular-ui-bootstrap'
import 'angular-cookies'
import './Source/libs/boostrap/css/bootstrap.min.css'
//TODO - IMPORT MODULES FROM NODE_DIRECTORY import '../node_modules/bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/bootstrap.css'
import './Source/libs/css/main.css'

//import directives
import './Source/directives/widget.js'
import './Source/directives/widget-header.js'
import './Source/directives/widget-body.js'
import './Source/directives/widget-footer.js'
import './Source/directives/loading.js'
import './Source/directives/post.directive.js'


angular
  .module('app', [
    'ui.router',
    'ngAnimate',
    'ui.bootstrap', 
    'ngCookies',
    'app.directives.rdWidget',
    'app.directives.rdWidgetHeader',
    'app.directives.rdWidgetBody',
    'app.directives.rdWidgetFooter',
    'app.directives.rdLoading',
    'app.directives.post'
  ])

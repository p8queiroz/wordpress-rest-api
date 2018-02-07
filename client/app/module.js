import angular from 'angular'
import '@uirouter/angularjs'
import 'angular-ui-bootstrap'
import 'angular-cookies'

//import directives
import './Source/directives/widget.js'
import './Source/directives/widget-header.js'
import './Source/directives/widget-body.js'
import './Source/directives/widget-footer.js'
import './Source/directives/loading.js'


angular
  .module('app', [
    'ui.bootstrap', 
    'ui.router',
    'ngCookies',
    'app.directives.rdWidget',
    'app.directives.rdWidgetHeader',
    'app.directives.rdWidgetBody',
    'app.directives.rdWidgetFooter',
    'app.directives.rdLoading'
  ])

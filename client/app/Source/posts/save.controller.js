import angular from 'angular'
import './save.scss'

angular
  .module('app')
  .controller('HomeControler', HomeControler)

  HomeControler.$inject = []

function HomeControler ($scope, $windowInstance, message, name, Vendor) {

  // noinspection BadExpressionStatementJS
  'ngInject'

  const ctrl = this

  console.log('this is the HomeControler')

  
}

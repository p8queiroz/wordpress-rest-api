import angular from 'angular'
import './save.scss'

angular
  .module('app')
  .controller('CompanyControler', CompanyControler)

  CompanyControler.$inject = []

function CompanyControler ($scope) {

  // noinspection BadExpressionStatementJS
  'ngInject'

  const ctrl = this
  console.log('this is the CompanyControler')

  
}

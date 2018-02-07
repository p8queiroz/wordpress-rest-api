import angular from 'angular'
import './list.scss'

angular
  .module('app')
  .controller('CompanyListControler', CompanyListControler)

  CompanyListControler.$inject = ['$state']

function CompanyListControler ($state) {
  // noinspection BadExpressionStatementJS
  'ngInject'
  const ctrl = this
  console.log('this is my home  CompanyListControler')

}

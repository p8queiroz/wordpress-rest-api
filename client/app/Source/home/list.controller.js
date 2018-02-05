import angular from 'angular'
import './list.scss'

angular
  .module('app')
  .controller('HomeListControler', HomeListControler)

  HomeListControler.$inject = []

function HomeListControler () {
  // noinspection BadExpressionStatementJS
  'ngInject'
  const ctrl = this
  
  controle.log('this is my home list controller')

}

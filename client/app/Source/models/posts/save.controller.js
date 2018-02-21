import angular from 'angular'
import './save.scss'

angular
  .module('app')
  .controller('PostControler', PostControler)

  PostControler.$inject = []

function PostControler ($scope) {

  // noinspection BadExpressionStatementJS
  'ngInject'

  const vm = this

  console.log('this is the PostControler')

  
}

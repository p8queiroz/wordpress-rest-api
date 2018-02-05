import angular from 'angular'
import './list.scss'

angular
  .module('app')
  .controller('PostListControler', PostListControler)

  PostListControler.$inject = []

function PostListControler () {
  // noinspection BadExpressionStatementJS
  'ngInject'
  const ctrl = this
  
  controle.log('this is my home list controller')

}

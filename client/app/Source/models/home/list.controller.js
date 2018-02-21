import angular from 'angular'

angular
  .module('app')
  .controller('HomeControler', HomeControler)

  HomeControler.$inject = ['$state']

function HomeControler ($state) {
  // noinspection BadExpressionStatementJS
  'ngInject'
  const vm = this
  
  console.log('this is my home  HomeControler')

}

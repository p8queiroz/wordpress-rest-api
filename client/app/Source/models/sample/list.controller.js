import angular from 'angular'

angular
  .module('app')
  .controller('SampleController', SampleController)

  SampleController.$inject = ['$state']

function SampleController ($state) {
  // noinspection BadExpressionStatementJS
  'ngInject'
  const vm = this
  
  console.log('this is my home  SampleController')

}

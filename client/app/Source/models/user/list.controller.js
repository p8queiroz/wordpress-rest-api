import angular from 'angular'

angular
  .module('app')
  .controller('UserController', UserController)

  UserController.$inject = ['$state']

function UserController ($state) {
  // noinspection BadExpressionStatementJS
  'ngInject'
  const vm = this
  
  console.log('this is my UserController')

}

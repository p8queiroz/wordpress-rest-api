import angular from 'angular'

angular
  .module('app')
  .controller('UserController', UserController)

  UserController.$inject = ['$state']

function UserController ($state) {
  // noinspection BadExpressionStatementJS
  'ngInject'
  const ctrl = this
  
  console.log('this is my UserController')

}

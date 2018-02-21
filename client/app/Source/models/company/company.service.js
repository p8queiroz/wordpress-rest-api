import angular from 'angular'

angular
  .module('app')
  .service('Company', Company)

function Company ($http, $filter, $q) {
  
  const vm = this

  vm.list = () => {
    console.log('this request is made');
  }
  
  let service = {
    list: this.list
  }

  return service

}

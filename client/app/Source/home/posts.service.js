import angular from 'angular'

angular
  .module('app')
  .service('Post', Post)

function Post ($http, $filter, $q, Utils) {
  
  const ctrl = this

  this.list = () => {
    console.log('this request is made');
  }
  
  let service = {
    list: this.list
  }

  return service

}

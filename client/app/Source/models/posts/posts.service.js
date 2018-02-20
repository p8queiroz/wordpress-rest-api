import angular from 'angular';

angular
  .module('app')
  .service('Post', Post)

function Post ($http, $filter, $q) {
  
  const ctrl = this

  ctrl.list = () => $http({
    url: `xxxx`,
    method: 'GET'
  })
  .then(_treatResponse)
  .catch(_treatError)
 
  function _treatResponse (response) {
   return response.data.map(_parsePost)
  }

  function _treatError(error){
    console.log('XHR Failed for asdfasdf.' + error.data)
  }

  function _parsePost(post) {
    return {
      ID: post.id,
      title:post.title,
      date: post.date,
      author: post.author
    }
  }

    
  let service = {
    list: this.list
  }

  return service

}

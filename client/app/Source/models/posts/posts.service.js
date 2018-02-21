import angular from 'angular';

angular
  .module('app')
  .service('Post', Post)

function Post ($http, $filter, $q) {
  
  const vm = this

  vm.list = () => $http({
    url: `http://p8queiroz.com/wp-json/wp/v2/posts/`,
    method: 'GET'
  })
  .then(_treatResponse)
  .catch(_treatError)
 
  function _treatResponse (response) {
   return response.data.map(_parsePost)
  }

  function _treatError(error){
    console.log('XHR Failed: ' + error.data)
  }

  function _parsePost(post) {
    return {
      id: post.id,
      title:post.title.rendered,
      content: post.content.rendered,
      date: post.date,
      author: post.author
    }
  }

    
  let service = {
    list: this.list
  }

  return service

}

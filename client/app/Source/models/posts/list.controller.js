import angular from 'angular'
import './list.scss'

angular
  .module('app')
  .controller('PostListControler', PostListControler)

  PostListControler.$inject = ['$state', 'Post', '$scope']

function PostListControler ($state, Post, $scope) {
  // noinspection BadExpressionStatementJS
  'ngInject'
  const vm = this
  vm.posts = []

  showPosts()

  function showPosts() {
 
    return getPosts().then(function(data) {
        console.log(vm.posts)
    });
  }

  function getPosts() {
        return Post.list()
            .then(function(data) {
              vm.posts = data
              return vm.posts           
        });
  } 

}

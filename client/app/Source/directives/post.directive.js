import angular from 'angular'

angular
    .module('app.directives.post', [])
    .directive('postDirective', postDirective);

function postDirective() {
   let ddo = {}

   ddo.restrict = "E"

   ddo.scope = {
       id    : "@",
       title : "@",
       content : "@",
       author : "@",
       date   : "@"
   }

   ddo.templateUrl = "Source/directives/post.directive.html" 

   return ddo

}

import angular from 'angular'


angular
    .module('app.directives.rdLoading', [])
    .directive('rdLoading', rdLoading);

function rdLoading() {
    var directive = {
        restrict: 'AE',
        template: '<div class="spinner">   <div class="bounce1"></div>   <div class="bounce2"></div>   <div class="bounce3"></div> </div>'    };
    return directive;
};
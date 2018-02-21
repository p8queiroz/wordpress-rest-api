/**
 * Alerts Controller
 */

angular
    .module('app')
    .controller('ModalController', ModalController);

    ModalController.$inject = ['$uibModal','$document']

function ModalController($uibModal, $document) {

    var vm = this;
    vm.items = ['item1', 'item2', 'item3'];
  
    vm.animationsEnabled = true;
  
    vm.open = function (size, parentSelector) {
      var parentElem = parentSelector ? 
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
      var modalInstance = $uibModal.open({
        animation: vm.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'myModalContent.html',
        controller: 'Modal1Controller',
        controllerAs: 'vm',
        size: size,
        appendTo: parentElem,
        resolve: {
          items: function () {
            return vm.items;
          }
        }
      });
  
      modalInstance.result.then(function (selectedItem) {
        vm.selected = selectedItem;
      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
    };
  
    vm.openComponentModal = function () {
      var modalInstance = $uibModal.open({
        animation: vm.animationsEnabled,
        component: 'modalComponent',
        resolve: {
          items: function () {
            return vm.items;
          }
        }
      });
  
      modalInstance.result.then(function (selectedItem) {
        vm.selected = selectedItem;
      }, function () {
        console.log('modal-component dismissed at: ' + new Date());
      });
    };
  
    vm.openMultipleModals = function () {
      $uibModal.open({
        animation: vm.animationsEnabled,
        ariaLabelledBy: 'modal-title-bottom',
        ariaDescribedBy: 'modal-body-bottom',
        templateUrl: 'stackedModal.html',
        size: 'sm',
        controller: function($scope) {
          $scope.name = 'bottom';  
        }
      });
  
      $uibModal.open({
        animation: vm.animationsEnabled,
        ariaLabelledBy: 'modal-title-top',
        ariaDescribedBy: 'modal-body-top',
        templateUrl: 'stackedModal.html',
        size: 'sm',
        controller: function($scope) {
          $scope.name = 'top';  
        }
      });
    };
  
    vm.toggleAnimation = function () {
      vm.animationsEnabled = !vm.animationsEnabled;
    };
   
}
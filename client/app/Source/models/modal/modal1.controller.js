/**
 * Alerts Controller
 */

angular
    .module('app')
    .controller('Modal1Controller', Modal1Controller);

    Modal1Controller.$inject = ['$uibModalInstance', 'items']

function Modal1Controller($uibModalInstance, items) {

  console.log('this is my console app Modal1Controller...')  
  var vm = this;
  vm.items = items;
  vm.selected = {
    item: vm.items[0]
  };

  vm.ok = function () {
    $uibModalInstance.close(vm.selected.item);
  };

  vm.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

}
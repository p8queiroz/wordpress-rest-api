/**
 * Alerts Controller
 */

angular
    .module('app')
    .controller('Modal1Controller', Modal1Controller);

    Modal1Controller.$inject = ['$uibModalInstance', 'items']

function Modal1Controller($uibModalInstance, items) {

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
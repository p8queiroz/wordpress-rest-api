/**
 * Alerts Controller
 */

angular
    .module('app')
    .controller('Modal1Controller', Modal1Controller);

    Modal1Controller.$inject = ['$uibModalInstance', 'items']

function Modal1Controller($uibModalInstance, items) {

  console.log('this is my console app Modal1Controller...')  
  var ctrl = this;
  ctrl.items = items;
  ctrl.selected = {
    item: ctrl.items[0]
  };

  ctrl.ok = function () {
    $uibModalInstance.close(ctrl.selected.item);
  };

  ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

}
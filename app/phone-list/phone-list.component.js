(function(){
  'use strict';

// Defining phonelistcontroller:
// OJO. AQUI LE DAMOS EL NOMBRE EN camelCase, PERO EN HTML HAY QUE LLAMARLO EN kebab-case
angular
  .module('phoneList')
  .component('phoneList',{
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
  });

  function PhoneListController(){
    var vm=this;
    vm.name="World";
    vm.phones=[
      {
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.',
        age: 1
      }, {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.',
        age: 2
      }, {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.',
        age: 3
      }
    ];
    vm.orderProp = 'age';
  }


})();

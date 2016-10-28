(function(){
  'use strict';

// Defining phonelistcontroller:
// OJO. AQUI LE DAMOS EL NOMBRE EN camelCase, PERO EN HTML HAY QUE LLAMARLO EN kebab-case
angular
  .module('phoneList')
  .component('phoneList',{
    templateUrl: 'phone-list/phone-list.template.html',
      controller: function PhoneListController(){
        var vm=this;
        vm.name="World";
        vm.phones=[
          {
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.'
          }, {
            name: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.'
          }, {
            name: 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet.'
          }
        ];
      }
  });


})();

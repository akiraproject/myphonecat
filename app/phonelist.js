(function(){
  'use strict';

// Defining phonelistcontroller:
angular
  .module('myPhoneCatApp')
  .controller('PhoneListController',PhoneListController);

  function PhoneListController(){
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

})();

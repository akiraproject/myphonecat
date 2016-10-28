describe('phoneList', function(){
  beforeEach(module('phoneList'));
  describe('PhoneListController', function() {
    it('should create a `phones` model with 3 phones', inject(function($controller) {
      var scope = {};
      var ctrl = $controller('PhoneListController as PhoneCtrl', {$scope: scope});

      expect(scope.PhoneCtrl.phones.length).toBe(3);
      expect(scope.PhoneCtrl.name).toBe('World');
    }));
  });
});

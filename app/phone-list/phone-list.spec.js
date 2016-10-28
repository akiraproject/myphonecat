describe('PhoneListController', function() {

  beforeEach(module('phoneList'));

  it('should create a `phones` model with 3 phones', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('PhoneListController as PhoneCtrl', {$scope: scope});

    expect(scope.PhoneCtrl.phones.length).toBe(3);
    expect(scope.PhoneCtrl.name).toBe('World');
  }));

});

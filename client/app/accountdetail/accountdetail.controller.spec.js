'use strict';

describe('Controller: AccountdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('trusteesApp'));

  var AccountdetailCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountdetailCtrl = $controller('AccountdetailCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

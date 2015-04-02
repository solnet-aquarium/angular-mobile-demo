'use strict';

describe('Controller: AccountsCtrl', function () {

  // load the controller's module
  beforeEach(module('trusteesApp'));

  var AccountsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountsCtrl = $controller('AccountsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

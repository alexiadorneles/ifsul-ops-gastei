angular.module('app').controller('CadastroController', function ($location, $scope) {
  // NOT IMPLEMENTED
  $scope.alternarShowPassword = alternarShowPassword;
  $scope.showPassword = false;

  function alternarShowPassword() {
    if (!$scope.showPassword) {
      $scope.showPassword = true;
    } else {
      $scope.showPassword = false;
    }
  }

});

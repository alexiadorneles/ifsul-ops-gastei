export default function EditarPerfil ($location, $scope){

  $scope.alternarShowPassword = alternarShowPassword;
    $scope.alternarShowNewPassword = alternarShowNewPassword;
  $scope.alternarShowRepeatPassword = alternarShowRepeatPassword;
  $scope.showPassword = false;
    $scope.showNewPassword = false;
  $scope.showRepeatPassword = false;

  function alternarShowNewPassword() {
    if (!$scope.showNewPassword) {
      $scope.showNewPassword = true;
    } else {
      $scope.showNewPassword = false;
    }
  }

  function alternarShowPassword() {
    if (!$scope.showPassword) {
      $scope.showPassword = true;
    } else {
      $scope.showPassword = false;
    }
  }

  function alternarShowRepeatPassword() {
    $scope.showRepeatPassword = $scope.showRepeatPassword ? false : true;
  }
}

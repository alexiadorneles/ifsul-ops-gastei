export default function CadastroController ($location, $scope){
  
  $scope.alternarShowPassword = alternarShowPassword;
  $scope.alternarShowRepeatPassword = alternarShowRepeatPassword;
  $scope.showPassword = false;
  $scope.showRepeatPassword = false;
  
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

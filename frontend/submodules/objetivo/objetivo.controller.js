export default function ObjetivoController ($location, $scope){
  $scope.exibirObjetivosCompletos = exibirObjetivosCompletos;
  $scope.exibirObjetivosIncompletos = exibirObjetivosIncompletos;
  $scope.exibirOpcoes = exibirOpcoes;
  $scope.showObjetivosCompletos = false;
  $scope.showObjetivosIncompletos = false;
  $scope.showOpcoes = false;

  function exibirObjetivosCompletos(){
    if(!$scope.showObjetivosCompletos){
      $scope.showObjetivosCompletos = true;
    }else{
      $scope.showObjetivosCompletos = false;
    }
  }

  function exibirObjetivosIncompletos(){
    if(!$scope.showObjetivosIncompletos){
      $scope.showObjetivosIncompletos = true;
    }else{
      $scope.showObjetivosIncompletos = false;
    }
  }

  function exibirOpcoes(){
    if(!$scope.showOpcoes){
      $scope.showObjetivosIncompletos = true;
      $scope.showOpcoes = true;
    }else {
      $scope.showOpcoes = false;
    }
  }

}

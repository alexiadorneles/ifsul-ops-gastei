import swal from 'sweetalert'
export default function AnteriorController ($location, $scope){
  $scope.exibirObjetivos = exibirObjetivos;
  $scope.showObjetivos = false;
  $scope.exibirGastos = exibirGastos;
  $scope.showGastos = false;

  function exibirObjetivos(){
    if(!$scope.showObjetivos){
      $scope.showObjetivos = true;
    }else{
      $scope.showObjetivos = false;
    }
  }
  function exibirGastos(){
    if(!$scope.showGastos){
      $scope.showGastos = true;
    }else{
      $scope.showGastos = false;
    }
  }

  }

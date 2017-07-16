import swal from 'sweetalert'
export default function ProximoController ($location, $scope){
  $scope.exibirGastos = exibirGastos;
  $scope.showGastos = false;

  function exibirGastos(){
    if(!$scope.showGastos){
      $scope.showGastos = true;
    }else{
      $scope.showGastos = false;
    }
  }

  }

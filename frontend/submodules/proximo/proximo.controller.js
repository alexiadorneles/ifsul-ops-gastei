import swal from 'sweetalert'
export default function ProximoController ($location, $scope){

  $scope.mostrarOpcoes = mostrarOpcoes;
  $scope.mostrarAdicionar = mostrarAdicionar;
  $scope.showAdicionar = false;
  $scope.adicionar = adicionar;

  $scope.exibirGastos = exibirGastos;
  $scope.showGastos = false;

  function mostrarOpcoes(gastoFixo) {
    gastoFixo.opcoes = gastoFixo.opcoes ? false : true;
  }

  function mostrarAdicionar() {
    $scope.showAdicionar = true;
  }

  function exibirGastos(){
    if(!$scope.showGastos){
      $scope.showGastos = true;
    }else{
      $scope.showGastos = false;
    }
  }

  function adicionar() {
    // TODO: adicionar lógica de adicionar objetivo
  }

}

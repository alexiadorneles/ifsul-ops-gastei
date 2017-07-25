import swal from 'sweetalert'
export default function GastoFixoController ($location, $scope) {

  $scope.mostrarOpcoes = mostrarOpcoes;
  $scope.mostrarAdicionar = mostrarAdicionar;
  $scope.showAdicionar = false;
  $scope.adicionar = adicionar;

  function mostrarOpcoes(gastoFixo) {
    gastoFixo.opcoes = gastoFixo.opcoes ? false : true;
  }

  function mostrarAdicionar() {
    $scope.showAdicionar = true;
  }

  function adicionar() {
    // TODO: adicionar lógica de adicionar objetivo
  }

}

import swal from 'sweetalert'
export default function GastoFixoController ($location, $scope) {

  $scope.mostrarOpcoes = mostrarOpcoes;

  function mostrarOpcoes(gastoFixo) {
    gastoFixo.opcoes = gastoFixo.opcoes ? false : true;
  }

}

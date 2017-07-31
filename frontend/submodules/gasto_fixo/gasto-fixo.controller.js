import swal from 'sweetalert'

export default function GastoFixoController ($location, $scope, categoriaService) {

  init()

  function mostrarOpcoes(gastoFixo) {
    gastoFixo.opcoes = gastoFixo.opcoes ? false : true;
  }

  function mostrarAdicionar() {
    $scope.showAdicionar = true;
  }

  function adicionar() {
    console.log($scope.selectedCategoria);
  }

  function init() {
    $scope.mostrarOpcoes = mostrarOpcoes;
    $scope.mostrarAdicionar = mostrarAdicionar;
    $scope.showAdicionar = false;
    $scope.adicionar = adicionar;
    $scope.categorias = {};

    categoriaService.buscarTodos().then( ( test )=> {
      $scope.categorias = test.data;
    })
  }
}

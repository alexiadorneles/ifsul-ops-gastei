import swal from 'sweetalert'
export default function CategoriaController ($location, $scope, categoriaService){

  init();

  function adicionarCategoria(){
    $scope.addCategoria = !$scope.addCategoria;
  };

  function init() {
    $scope.adicionarCategoria = adicionarCategoria;
    categoriaService.buscarPorUsuario().then((response) => $scope.categorias = response.data);
  };

}

import swal from 'sweetalert'

export default function CategoriaController ($location, $scope, categoriaService){

  init();

  function adicionarCategoria(){
    $scope.addCategoria = !$scope.addCategoria;

    // Se vai esconder, ação de inserção
    if ($scope.addCategoria === false && $scope.categoria) {

        // preto, se nao selecionado
        $scope.categoria.cor = $scope.categoria.cor || "#000000";

        categoriaService.criar($scope.categoria).then( response => {
            $scope.categorias.push(response.data);
            swal("Sucesso!", "Categoria adicionada.", "success");
        }).then( () => {
            // TODO usar error handler
        })
    }
  }

  function init(){
      $scope.adicionarCategoria = adicionarCategoria;
      $scope.addCategoria = false;

      categoriaService.buscarTodos().then( response => {
          $scope.categorias = response.data
      }).then( () => {
          // TODO usar error handler
      })
  }
}

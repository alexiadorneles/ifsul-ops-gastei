import swal from 'sweetalert'

export default function CategoriaController ($location, $scope){
  $scope.adicionarCategoria = adicionarCategoria;
  $scope.addCategoria = false;

  function adicionarCategoria(){
    $scope.addCategoria = !$scope.addCategoria;
  }
}

import swal from 'sweetalert'
export default function CategoriaController ($location, $scope){
  $scope.adicionarCategoria = adicionarCategoria;
  $scope.addCategoria = false;

  function adicionarCategoria(){
    if(!$scope.addCategoria){
        $scope.addCategoria = true;
    }else{
        $scope.addCategoria = false;
    }
  }
}

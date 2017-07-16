import swal from 'sweetalert'
export default function AdicionarObjetivoController ($location, $scope){
$scope.exibirCategorias = exibirCategorias;
$scope.adicionarCategoria = adicionarCategoria;
$scope.exibirOpcoesCategoria = false;
$scope.addCategoria = false;

function exibirCategorias(){
  if(!$scope.exbirOpcoesCategoria){
      $scope.exbirOpcoesCategoria = true;
  }else{
      $scope.exbirOpcoesCategoria = false;
    }
  }

  function adicionarCategoria(){
    if(!$scope.addCategoria){
        $scope.addCategoria = true;
    }else{
        $scope.addCategoria = false;
    }
  }

}

import swal from 'sweetalert'
export default function AdicionarObjetivoController ($location, $scope){
$scope.exibirCategorias = exibirCategorias;
$scope.adicionarCategoria = adicionarCategoria;
$scope.objetivoAdicionado = objetivoAdicionado;
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

  function objetivoAdicionado(){
    swal({
      title: "Objetivo Adicionado!",
      text: "<span>(Nome do objetivo adicionado) adicionado com sucesso.</span>",
      type: "success",
      html: true
    });
  }

}

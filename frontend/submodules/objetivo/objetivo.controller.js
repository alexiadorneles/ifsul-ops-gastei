import swal from 'sweetalert'
export default function ObjetivoController ($location, $scope){
  $scope.exibirObjetivosCompletos = exibirObjetivosCompletos;
  $scope.exibirObjetivosIncompletos = exibirObjetivosIncompletos;
  $scope.completar = completar;
  $scope.arquivar = arquivar;
  $scope.excluir = excluir;
  $scope.adicionarObjetivo = adicionarObjetivo;
  $scope.simularCompra = simularCompra;
  $scope.objetivosArquivados = objetivosArquivados;
  $scope.showObjetivosCompletos = true;
  $scope.showObjetivosIncompletos = true;

  function exibirObjetivosCompletos(){
    if(!$scope.showObjetivosCompletos){
      $scope.showObjetivosCompletos = true;
    }else{
      $scope.showObjetivosCompletos = false;
    }
  }

  function exibirObjetivosIncompletos(){
    if(!$scope.showObjetivosIncompletos){
      $scope.showObjetivosIncompletos = true;
    }else{
      $scope.showObjetivosIncompletos = false;
    }
  }

  function completar(){
    swal({
    title: "Tem certeza?",
    text: "Desejas completar o objetivo?",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Completar",
    cancelButtonText: "Cancelar",
    closeOnConfirm: false,
    closeOnCancel: false
    },
    function(isConfirm){
      if (isConfirm) {
        swal("Completado!", "O objetivo foi completado.", "success");
      } else {
        swal("Cancelado", "Operação cancelada.", "error");
      }
    });
  }

  function arquivar(){
    swal({
    title: "Tem certeza?",
    text: "Desejas arquivar o objetivo?",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Arquivar",
    cancelButtonText: "Cancelar",
    closeOnConfirm: false,
    closeOnCancel: false
    },
    function(isConfirm){
      if (isConfirm) {
        swal("Arquivado!", "O objetivo foi arquivado.", "success");
      } else {
        swal("Cancelado!", "Operação cancelada.", "error");
      }
    });
  }

  function excluir(){
    swal({
    title: "Tem certeza?",
    text: "Desejas excluir o objetivo?",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Excluir",
    cancelButtonText: "Cancelar",
    closeOnConfirm: false,
    closeOnCancel: false
    },
    function(isConfirm){
      if (isConfirm) {
        swal("Excluído!", "O objetivo foi excluído.", "success");
      } else {
        swal("Cancelado", "Operação cancelada.", "error");
      }
    });
  }

  function adicionarObjetivo(){
    $location.path('/objetivo/adicionar-objetivo');
  }

  function simularCompra(){
    $location.path('/objetivo/simulacao');
  }

  function objetivosArquivados(){
    $location.path('/objetivo/arquivados');
  }

}

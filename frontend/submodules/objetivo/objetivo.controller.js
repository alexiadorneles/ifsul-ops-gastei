import swal from 'sweetalert'
export default function ObjetivoController ($location, $scope, categoriaService, objetivoService) {

  init();

  function exibirObjetivosCompletos(){
    $scope.showObjetivosCompletos = !$scope.showObjetivosCompletos;
  }

  function exibirObjetivosIncompletos(){
    $scope.showObjetivosIncompletos = !$scope.showObjetivosIncompletos;
  }

  function exibirGastos(){
    $scope.showGastos = !$scope.showGastos;
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

  function excluir(objetivo){
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
        objetivoService.deletar(objetivo.id).then(() => {
          buscarObjetivos()
          swal("Excluído!", "O objetivo foi excluído.", "success");
        })
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

  function atualizarObjetivo(objetivo, status) {
    objetivo.status = status;
    objetivoService.atualizar(objetivo).then(() => buscarObjetivos());
  }

  function buscarObjetivos() {
    objetivoService.buscarTodos().then( response => {
      let objetivos = response.data;
      $scope.objetivosCompletos = objetivos.filter(objetivo => objetivo.status === 'C');
      $scope.objetivosIncompletos = objetivos.filter(objetivo => objetivo.status === 'I');
    });
  }

  function somarValorCompletos() {
    if (!!$scope.objetivosCompletos) {
      return $scope.objetivosCompletos
      .map(objetivo => objetivo.valor)
      .reduce((acumulativo, novoValor) => acumulativo + novoValor);
    }
  }

  function init() {
    $scope.exibirObjetivosCompletos = exibirObjetivosCompletos;
    $scope.exibirObjetivosIncompletos = exibirObjetivosIncompletos;
    $scope.completar = completar;
    $scope.arquivar = arquivar;
    $scope.excluir = excluir;
    $scope.adicionarObjetivo = adicionarObjetivo;
    $scope.simularCompra = simularCompra;
    $scope.objetivosArquivados = objetivosArquivados;
    $scope.exibirGastos = exibirGastos;
    $scope.atualizarObjetivo = atualizarObjetivo;
    $scope.somarValorCompletos = somarValorCompletos;

    categoriaService.buscarTodos().then( response => {
      $scope.categorias = response.data;
    });

    buscarObjetivos();

  }

}

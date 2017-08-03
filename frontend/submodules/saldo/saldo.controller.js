import swal from 'sweetalert'
export default function AnteriorController ($location, $scope, categoriaService, objetivoService){
  init();

  function exibirObjetivosCompletos(){
    $scope.showObjetivosCompletos = !$scope.showObjetivosCompletos;
  }


  function exibirGastos(){
    $scope.showGastos = !$scope.showGastos;
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


  function buscarObjetivos() {
    objetivoService.buscarPorUsuario().then( response => {
      let objetivos = response.data;
      $scope.objetivosCompletos = objetivos.filter(objetivo => objetivo.status === 'C');
      $scope.objetivosIncompletos = objetivos.filter(objetivo => objetivo.status === 'I');
    });
  }

  function somarValorCompletos() {
    if (possuiCompletos()) {
      return $scope.objetivosCompletos
      .map(objetivo => objetivo.valor)
      .reduce((acumulativo, novoValor) => acumulativo + novoValor)
      .toFixed(2);
    }
  }

  function possuiCompletos() {
    return angular.isDefined($scope.objetivosCompletos)
    && $scope.objetivosCompletos.length > 0;
  }

  function init() {
    $scope.exibirObjetivosCompletos = exibirObjetivosCompletos;
    $scope.excluir = excluir;
    $scope.exibirGastos = exibirGastos;
    $scope.somarValorCompletos = somarValorCompletos;
    $scope.possuiCompletos = possuiCompletos;
    $scope.showObjetivosIncompletos = true;

    categoriaService.buscarPorUsuario().then( response => {
      $scope.categorias = response.data;
    });

    buscarObjetivos();

  }

}

import swal from 'sweetalert'
export default function SaldoController ($location, $scope, categoriaService, objetivoService, saldoService){
  init();

  function exibirObjetivosCompletos(){
    $scope.showObjetivosCompletos = !$scope.showObjetivosCompletos;
  }


  function exibirGastos(){
    $scope.showGastos = !$scope.showGastos;
  }

  function buscarObjetivos() {
    objetivoService.buscarPorUsuario().then( response => {
      let objetivos = response.data;

      // filtra objetivos dessa data
      $scope.objetivosCompletos = objetivos
          .filter(objetivo => objetivo.status === 'C')
          .filter(objetivo => {
              const dataObjetivo = {}, mesContexto = {};

              dataObjetivo.date = new Date(objetivo.data);
              dataObjetivo.mes = dataObjetivo.date.getMonth();
              dataObjetivo.ano = dataObjetivo.date.getFullYear();

              mesContexto.mes = saldoService.get().getMonth();
              mesContexto.ano = saldoService.get().getFullYear();

              return  mesContexto.mes === dataObjetivo.mes &&
                      mesContexto.ano === mesContexto.ano
          })
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

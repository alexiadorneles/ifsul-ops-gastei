import swal from 'sweetalert'
export default function ObjetivoController ($location, $scope, categoriaService, objetivoService, salarioService, $localStorage) {

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

  function completar(objetivo){
    $scope.objetivoCompletar = objetivo;
    swal({
      title: "Tem certeza?",
      text: "Desejas completar o objetivo?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Completar",
      confirmButtonColor: "#66C4AD",
      cancelButtonText: "Cancelar",
      closeOnConfirm: false,
      closeOnCancel: false
    },
    function(isConfirm){
      if (isConfirm) {
        atualizarObjetivo($scope.objetivoCompletar, 'C');
        swal("Completado!", "O objetivo foi completado.", "success");
        $scope.objetivoCompletar = {};
      } else {
        swal("Cancelado", "Operação cancelada.", "error");
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

  function atualizarObjetivo(objetivo, status) {
    objetivo.status = status;
    objetivoService.atualizar(objetivo).then(() => buscarObjetivos());
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

  function setarSalario () {
    salarioService.buscarPorUsuario().then((res) => {
      let salarios = res.data;
      salarios.forEach(salario => salario.data = new Date(salario.data));
      salarios.sort(compare);
      $localStorage.salarioAtual = salarios.shift();
    })
  }

  function compare(a,b) {
    if (a.data > b.data) return -1;
    if (a.data < b.data) return 1;
    return 0;
  }

  function init() {
    $scope.exibirObjetivosCompletos = exibirObjetivosCompletos;
    $scope.exibirObjetivosIncompletos = exibirObjetivosIncompletos;
    $scope.completar = completar;
    $scope.excluir = excluir;
    $scope.adicionarObjetivo = adicionarObjetivo;
    $scope.simularCompra = simularCompra;
    $scope.exibirGastos = exibirGastos;
    $scope.atualizarObjetivo = atualizarObjetivo;
    $scope.somarValorCompletos = somarValorCompletos;
    $scope.possuiCompletos = possuiCompletos;
    $scope.showObjetivosIncompletos = true;
    $scope.categorias = [];
    $scope.setarSalario = setarSalario;
    setarSalario()

    categoriaService.buscarPorUsuario().then( response => {
      $scope.categorias = response.data;
    });

    buscarObjetivos();

  }

}

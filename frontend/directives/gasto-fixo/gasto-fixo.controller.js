import swal from 'sweetalert'

export default function GastoFixoController ($location, $scope, categoriaService, gastoFixoService) {

  init();

  function removerDropdown() {
    $scope.showGastos = true;
    $scope.mostrarGastosFixos = null;
  }

  function mostrarOpcoes(gastoFixo) {
    gastoFixo.opcoes = !gastoFixo.opcoes;
  }

  function mostrarGastosFixos() {
    $scope.showGastos = !$scope.showGastos;
  }

  function mostrarAdicionar() {
    $scope.showAdicionar = true;
  }

  function adicionar() {
    const inicioData = new Date();
    const fimData = new Date();
    const duracaoMeses = $scope.gastoFixo.periodo;

    // data final é o periodo mais quantos meses a partir do inicial
    fimData.setMonth(inicioData.getMonth()+duracaoMeses);

    const gastoFixo = {
      nome: $scope.gastoFixo.nome,
      valor: $scope.gastoFixo.valor,
      categoria: $scope.gastoFixo.selectedCategoria,
      inicioData,
      fimData, // TODO permitir enviar undefined, para casos indeterminados
      duracaoMeses,
    };

    gastoFixoService.criar(gastoFixo).then( () => {
      $scope.gastosFixos.push(gastoFixo);
      $scope.showAdicionar = false;
      $scope.gastoFixo = {};
    })
  }
  function excluirGasto(gastoFixo){
    swal({
      title: "Tem certeza?",
      text: "Desejas excluir este gasto fixo?",
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
        gastoFixoService.deletar(gastoFixo).then(() => {
          buscarPorUsuario()
          swal("Excluído!", "O gasto fixo foi excluído.", "success");
        })
      } else {
        swal("Cancelado", "Operação cancelada.", "error");
      }
    });
  }
  function buscarPorUsuario(){
    gastoFixoService.buscarPorUsuario().then( response => {
      $scope.gastosFixos = response.data;
    });
  }

  function init() {
    $scope.mostrarOpcoes = mostrarOpcoes;
    $scope.mostrarAdicionar = mostrarAdicionar;
    $scope.mostrarGastosFixos = mostrarGastosFixos;
    $scope.removerDropdown = removerDropdown;
    $scope.showAdicionar = false;
    $scope.adicionar = adicionar;
    $scope.categorias = {};
    $scope.excluirGasto = excluirGasto;

    categoriaService.buscarPorUsuario().then( response => {
      $scope.categorias = response.data;
    });
    buscarPorUsuario();
  }
}

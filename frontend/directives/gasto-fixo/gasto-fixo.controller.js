import swal from 'sweetalert'

export default function GastoFixoController ($location, $scope, categoriaService, gastoFixoService) {

  init();

  function mostrarOpcoes(gastoFixo) {
    gastoFixo.opcoes = !gastoFixo.opcoes;
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

  function init() {
    $scope.mostrarOpcoes = mostrarOpcoes;
    $scope.mostrarAdicionar = mostrarAdicionar;
    $scope.showAdicionar = false;
    $scope.adicionar = adicionar;
    $scope.categorias = {};

    categoriaService.buscarTodos().then( response => {
      $scope.categorias = response.data;
    });

    gastoFixoService.buscarTodos().then( response => {
      $scope.gastosFixos = response.data;
    });
  }
}

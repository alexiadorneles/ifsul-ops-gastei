import swal from 'sweetalert'
export default function SimulacaoController ($location, $scope, objetivoService){

  init();

  function simulador(selecionados){
    swal({
      title: "Simulação:",
      text: "<span>Valor total dos objetivos: R$ "+somarValor(selecionados)+".</span><br><span>Saldo anterior: R$110,00.</span><br><span>Saldo final: R$10,00.</span>",
      html: true,
      confirmButtonColor: "#66C4AD"
    });
  };

  function buscarObjetivosIncompletos() {
    objetivoService.buscarPorUsuario().then( response => {
      let objetivos = response.data;
      $scope.objetivosIncompletos = objetivos.filter(objetivo => objetivo.status === 'I');
    });
  }

  function somarValor(selecionados) {
      return selecionados
      .reduce((acumulativo, novoValor) => acumulativo + novoValor)
      .toFixed(2);
  }

  function init() {
    $scope.simulador = simulador;
    $scope.selecionados = [];

    buscarObjetivosIncompletos();

  }
}

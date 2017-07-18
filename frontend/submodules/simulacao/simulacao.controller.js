import swal from 'sweetalert'
export default function SimulacaoController ($location, $scope){
  $scope.simulador = simulador;

  function simulador(){
    swal({
      title: "Simulação:",
      text: "<span>Valor total dos objetivos: R$100,00.</span><br><span>Saldo anterior: R$110,00.</span><br><span>Saldo final: R$10,00.</span>",
      html: true,
      confirmButtonColor: "#66C4AD"
    });
  }
}

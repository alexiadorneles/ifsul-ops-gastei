import swal from 'sweetalert'
export default function menu (authFactory){
    return {
        restrict: 'A',
        templateUrl: './directives/menu/menu.html',
        controller: ($scope, $location, $localStorage, saldoService) => {
            init();

            $scope.showMenu = () => {
                $scope.menuIsOpen = !$scope.menuIsOpen
            };

            function init() {
              $scope.salario = $localStorage.salario;
              $scope.salarioAtual = $localStorage.salarioAtual;
                $scope.logout = authFactory.logout;
                $scope.usuario = {
                    nome: localStorage.getItem("nome"),
                    picture: localStorage.getItem("picture")
                };
            }

            $scope.editarReceita = () => {
                swal({
                        title: "Editar Receita",
                        text: "Digite sua nova receita (somente números): ",
                        type: "input",
                        inputType:	"number",
                        showCancelButton: true,
                        closeOnConfirm: false,
                        animation: "slide-from-top",
                        inputPlaceholder: "R$ 500,00"
                    },
                    function(inputValue){
                        if (inputValue === false) return false;

                        if (inputValue === "") {
                            swal.showInputError("Receita Inválida!");
                            return false
                        }

                        swal("Receita alterada com sucesso!", "Nova receita: R$" + inputValue, "success");
                    });
            };

            $scope.selecionarMes = () => {
                swal({
                        title: "Consultar Saldo",
                        text: "Digite a data que deseja consultar: ",
                        type: "input",
                        inputType:	"date",
                        showCancelButton: true,
                        closeOnConfirm: false,
                        animation: "slide-from-top",
                        inputPlaceholder: "10/10/2017"
                    },
                    function(data){
                        // TODO validar data
                        if(typeof data !== "undefined"){
                            //data = new Date(1999, 9, 10);
                            data = new Date(data);
                            saldoService.set(data);
                            $location.path("/gasto-fixo").replace();
                            $scope.$apply();

                            swal("Pronto!", "Mostrando saldo para mes de "+saldoService.getMesNome());
                        }
                    }
                );
            };

            $scope.verificarAtivo = function(urlEsperado){
              return $location.$$absUrl.endsWith(urlEsperado)
            }
        }
    }
}

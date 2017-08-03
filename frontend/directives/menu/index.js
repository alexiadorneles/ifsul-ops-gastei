import swal from 'sweetalert'
export default function menu (authFactory){
    return {
        restrict: 'A',
        templateUrl: './directives/menu/menu.html',
        controller: ($scope, $location, $localStorage) => {
            init();

            $scope.showMenu = () => {
                $scope.menuIsOpen = !$scope.menuIsOpen
            };

            function init() {
              $scope.salario = $localStorage.salario;
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
            }

            $scope.mesAnterior = () => {
              swal({
                      title: "Mês Anterior",
                      text: "Selecione a data do mês anterior: ",
                      type: "input",
                      inputType:	"month",
                      showCancelButton: true,
                      closeOnConfirm: false,
                      animation: "slide-from-top"
                  },
                  function(isConfirm){
                    if(isConfirm) {
                     window.location.replace('/anterior');
                    }
                  });

            }

            $scope.proximoMes = () => {
              swal({
                      title: "Próximo Mês",
                      text: "Selecione a data do próximo mês: ",
                      type: "input",
                      inputType:	"month",
                      showCancelButton: true,
                      closeOnConfirm: false,
                      animation: "slide-from-top",
                  },
                  function(isConfirm){
                      window.location.replace('/proximo');
                  }
                );

            }

            $scope.verificarAtivo = function(urlEsperado){
              return $location.$$absUrl.endsWith(urlEsperado)
            }
        }
    }
}

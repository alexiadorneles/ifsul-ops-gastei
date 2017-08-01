import swal from 'sweetalert'
export default function menu (authFactory){
    return {
        restrict: 'A',
        templateUrl: './directives/menu/menu.html',
        controller: ($scope, $location) => {
            init();

            $scope.showMenu = () => {
                $scope.menuIsOpen = !$scope.menuIsOpen
            };

            function init() {
                $scope.logout = authFactory.logout;
                $scope.usuario = {
                    nome: localStorage.getItem("nome"),
                    picture: localStorage.getItem("picture")
                };
            }

            $scope.editarSaldo = () => {
              $scope.editarSaldo = () => {
                swal({
                  title: "Editar Saldo",
                  text: "Digite seu novo saldo (somente números): ",
                  type: "input",
                  showCancelButton: true,
                  closeOnConfirm: false,
                  animation: "slide-from-top",
                  inputPlaceholder: "R$ 500,00"
                },
                function(inputValue){
                  if (inputValue === false) return false;

                  if (inputValue === "") {
                    swal.showInputError("Saldo Inválido!");
                    return false
                  }

                  swal("Saldo alterado com sucesso!", "Novo Saldo: R$" + inputValue, "success");
                });
              }
            }

            $scope.verificarAtivo = function(urlEsperado){
              return $location.$$absUrl.endsWith(urlEsperado)
            }
        }
    }
}

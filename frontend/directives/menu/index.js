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

            $scope.verificarAtivo = function(urlEsperado){
              return $location.$$absUrl.endsWith(urlEsperado)
            }
        }
    }
}

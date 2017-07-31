export default function menu (authFactory){
    return {
        restrict: 'A',
        templateUrl: './directives/menu/menu.html',
        controller: ($scope) => {
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
        }
    }
}

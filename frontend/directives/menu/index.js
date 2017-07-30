export default function menu (){
    return {
        restrict: 'A',
        templateUrl: './directives/menu/menu.html',
        controller: ($scope) => {
            init();

            $scope.showMenu = () => {
                $scope.menuIsOpen = !$scope.menuIsOpen
            };

            function init() {
                $scope.usuario = {
                    nome: localStorage.getItem("nome"),
                    picture: localStorage.getItem("picture")
                };
            }
        }
    }
}
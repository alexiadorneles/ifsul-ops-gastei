export default function menu (){
    return {
        restrict: 'A',
        templateUrl: './directives/menu/menu.html',
        controller: $scope => {
            $scope.showMenu = () => {
                $scope.menuIsOpen = !$scope.menuIsOpen
            }
        }
    }
}
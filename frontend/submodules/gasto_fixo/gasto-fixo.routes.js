export default function routes($routeProvider) {
  $routeProvider
    .when('/gasto-fixo', {
        controller: 'GastoFixoController',
        templateUrl: '/submodules/gasto_fixo/gasto-fixo.html'
    })
}

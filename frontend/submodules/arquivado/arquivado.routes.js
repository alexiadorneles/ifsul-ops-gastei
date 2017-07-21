export default function routes($routeProvider) {
  $routeProvider
    .when('/objetivo/arquivados', {
        controller: 'ArquivadoController',
        templateUrl: '/submodules/arquivado/arquivado.html'
    })
}

export default function routes($routeProvider) {
  $routeProvider
    .when('/proximo', {
        controller: 'ProximoController',
        templateUrl: '/submodules/proximo/proximo.html'
    })
}

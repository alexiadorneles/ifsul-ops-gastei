export default function routes($routeProvider) {
  $routeProvider
    .when('/objetivo', {
        controller: 'ObjetivoController',
        templateUrl: '/submodules/objetivo/objetivo.html'
    })
}

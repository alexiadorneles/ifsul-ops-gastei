export default function routes($routeProvider) {
  $routeProvider
    .when('/objetivo', {
        controller: 'ObjetivoController',
        templateUrl: '/objetivo/objetivo.html'
    })
}

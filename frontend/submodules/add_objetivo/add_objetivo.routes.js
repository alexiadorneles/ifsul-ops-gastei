export default function routes($routeProvider) {
  $routeProvider
    .when('/adicionar-objetivo', {
        controller: 'AdicionarObjetivoController',
        templateUrl: '/submodules/add_objetivo/add_objetivo.html'
    })
}

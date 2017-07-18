export default function routes($routeProvider) {
  $routeProvider
    .when('/objetivo/simulacao', {
        controller: 'SimulacaoController',
        templateUrl: '/submodules/simulacao/simulacao.html'
    })
}

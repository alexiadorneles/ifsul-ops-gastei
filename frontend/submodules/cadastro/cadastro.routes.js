export default function routes($routeProvider) {
  $routeProvider
    .when('/cadastro', {
        controller: 'CadastroController',
        templateUrl: '/submodules/cadastro/cadastro.html'
    })
}

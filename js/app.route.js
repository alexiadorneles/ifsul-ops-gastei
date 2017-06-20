angular.module('app').config(function ($routeProvider) {
  $routeProvider
  .when('/login', {
    controller: 'LoginController',
    templateUrl: '/login/login.html'
  })
  .when('/cadastro', {
    controller: 'CadastroController',
    templateUrl: '/cadastro/cadastro.html'
  })
  .otherwise({redirectTo: '/login'});
});

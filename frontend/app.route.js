routing.$inject = ['$routeProvider', '$locationProvider'];

export default function routing ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('')
  $routeProvider.otherwise({redirectTo: '/login'});

  $routeProvider
    .when('/anterior', {
        controller: 'AnteriorController',
        templateUrl: '/submodules/anterior/anterior.html'
    })
    .when('/proximo', {
        controller: 'ProximoController',
        templateUrl: '/submodules/proximo/proximo.html'
    })
    .when('/objetivo', {
        controller: 'ObjetivoController',
        templateUrl: '/submodules/objetivo/objetivo.html'
    })
    .when('/objetivo/adicionar-objetivo', {
        controller: 'AdicionarObjetivoController',
        templateUrl: '/submodules/add_objetivo/add_objetivo.html'
    })
    .when('/objetivo/arquivados', {
        controller: 'ArquivadoController',
        templateUrl: '/submodules/arquivado/arquivado.html'
    })
    .when('/objetivo/simulacao', {
        controller: 'SimulacaoController',
        templateUrl: '/submodules/simulacao/simulacao.html'
    })
    .when('/cadastro', {
        controller: 'CadastroController',
        templateUrl: '/submodules/cadastro/cadastro.html'
    })
    .when('/login', {
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: '/submodules/login/login.html'
    })
    .when('/callback', {
      controller: 'CallbackController',
      templateUrl: '/submodules/login/callback.html'
    })
    .when('/gasto-fixo', {
        controller: 'GastoFixoController',
        templateUrl: '/submodules/gasto_fixo/gasto-fixo.html'
    })
};


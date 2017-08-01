routing.$inject = ['$routeProvider', '$locationProvider'];

export default function routing ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('')
  $routeProvider.otherwise({redirectTo: '/login'});

  $routeProvider
    .when('/anterior', {
        controller: 'AnteriorController',
        templateUrl: '/submodules/anterior/anterior.html',
        resolve: {
          autenticado: function (authFactory) {
            return authFactory.isAutenticadoPromise();
          }
        }
    })
    .when('/proximo', {
        controller: 'ProximoController',
        templateUrl: '/submodules/proximo/proximo.html',
        resolve: {
          autenticado: function (authFactory) {
            return authFactory.isAutenticadoPromise();
          }
        }
    })
    .when('/objetivo', {
        controller: 'ObjetivoController',
        templateUrl: '/submodules/objetivo/objetivo.html',
        resolve: {
          autenticado: function (authFactory) {
            return authFactory.isAutenticadoPromise();
          }
        }
    })
    .when('/objetivo/adicionar-objetivo', {
        controller: 'AdicionarObjetivoController',
        templateUrl: '/submodules/add_objetivo/add_objetivo.html',
        resolve: {
          autenticado: function (authFactory) {
            return authFactory.isAutenticadoPromise();
          }
        }
    })
    .when('/objetivo/arquivados', {
        controller: 'ArquivadoController',
        templateUrl: '/submodules/arquivado/arquivado.html',
        resolve: {
          autenticado: function (authFactory) {
            return authFactory.isAutenticadoPromise();
          }
        }
    })
    .when('/objetivo/simulacao', {
        controller: 'SimulacaoController',
        templateUrl: '/submodules/simulacao/simulacao.html',
        resolve: {
          autenticado: function (authFactory) {
            return authFactory.isAutenticadoPromise();
          }
        }
    })
    .when('/cadastro', {
        controller: 'CadastroController',
        templateUrl: '/submodules/cadastro/cadastro.html'
    })
    .when('/login', {
      controller: 'LoginController',
      templateUrl: '/submodules/login/login.html'
    })
    .when('/gasto-fixo', {
        controller: 'GastoFixoController',
        templateUrl: '/submodules/gasto_fixo/gasto-fixo.html',
        resolve: {
          autenticado: function (authFactory) {
            return authFactory.isAutenticadoPromise();
          }
        }
    })
    .when('/home', {
        controller: 'HomeController',
        templateUrl: '/submodules/home/home.html'
    })
    .when('/editar-perfil', {
      controller: 'EditarPerfilController',
      templateUrl: '/submodules/editar_perfil/editar-perfil.html',
      resolve: {
        autenticado: function (authFactory) {
          return authFactory.isAutenticadoPromise();
        }
      }
    })
    .when('/inicial', {
      controller: 'InicialController',
      templateUrl: '/submodules/inicial/inicial.html',
      resolve: {
        logadoComGoogle: function (authFactory) {
          return authFactory.isLoggedWithGooglePromise();
        }
      }
    })
};

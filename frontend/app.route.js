routing.$inject = ['$routeProvider', '$locationProvider'];

export default function routing ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('')
    $routeProvider.otherwise({redirectTo: '/login'});

    $routeProvider
        .when('/saldo', {
            controller: 'SaldoController',
            templateUrl: '/submodules/saldo/saldo.html',
            resolve: {
                autenticado: function (authFactory) {
                    return authFactory.isAutenticadoPromise();
                }
            }
        })
        .when('/categorias', {
            controller: 'CategoriaController',
            templateUrl: '/submodules/categoria/categoria.html',
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

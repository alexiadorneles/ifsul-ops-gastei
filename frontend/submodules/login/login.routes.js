export default function routing ($routeProvider) {
  $routeProvider
  .when('/login', {
    controller: 'LoginController',
    templateUrl: '/submodules/login/login.html'
  })
};

routing.$inject = ['$routeProvider', '$locationProvider'];

export default function routing ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('')
  $routeProvider.otherwise({redirectTo: '/login'});
};


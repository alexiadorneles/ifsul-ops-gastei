export default function routes($routeProvider) {
  $routeProvider
    .when('/anterior', {
        controller: 'AnteriorController',
        templateUrl: '/submodules/anterior/anterior.html'
    })
}

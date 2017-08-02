import swal from 'sweetalert'

export default function ($location, $scope, authFactory, usuarioService, $localStorage, $window) {

  redirect();

  $scope.auth = authFactory;
  $scope.loginGoogle = loginGoogle;

  function redirect() {
    if (!!$localStorage.usuarioGoogle)
      $location.path('/inicial');
    if(authFactory.isAuthenticated())
      $location.path('/objetivo');
  }

  function loginGoogle() {
    let auth2 = GoogleInit();

    auth2.signIn().then(function (response) {
      if (response.Zi) {
        localStorage.setItem("picture", response.w3.Paa);
        let usuario = { nome: response.w3.ig, email: response.w3.U3, senha: response.w3.Eea };
        usuarioService.criar(usuario).then((response) => {
          usuario.id = response.data.id;
          $localStorage.usuarioGoogle = usuario;
          $window.location.href = 'http://localhost:9000/inicial'
        })
      }
    });
  };


  function GoogleInit() {
    var auth2;
    gapi.load('auth2', function () {
      auth2 = gapi.auth2.init({
        client_id: '645679162235-cuol995dddui8h7g4t2d6uci91i3tanv.apps.googleusercontent.com',
        fetch_basic_profile: true,
        scope: 'profile'
      })
    })
    return auth2;
  }


}

import swal from 'sweetalert'

export default function($location, $scope, authFactory, usuarioService){

  $scope.auth = authFactory;
  $scope.loginGoogle = loginGoogle;

  function loginGoogle() {
    let auth2 = GoogleInit();

    auth2.signIn().then(function (response) {
      if (response.Zi) {
        let usuario = { nome: response.w3.ig, email: response.w3.U3, senha: response.w3.Eea, salario: 0 };
        criarUsuario(usuario);
      }
    });
  };

  function criarUsuario(usuario) {
    usuarioService
    .criar(usuario)
    .then(response => {
      logar(usuario);
    });
  }

  function logar(usuario) {
    authFactory.login(usuario)
    .then(
      function (response) {
        swal({
          title: "Login realizado com sucesso!",
          text: 'Bem vindo, '  + usuario.nome + '.',
          timer: 2000,
          showConfirmButton: false
        });
        localStorage.setItem('nome', usuario.nome);
        localStorage.setItem('foto', usuario.urlFoto);
        $window.location.reload();
      },
      function (response) {
        swal({
          title: "Erro ao logar!",
          text: "Houve algum erro com o login, por favor tente novamente!",
          type: "error",
          confirmButtonText: "OK"
        });
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

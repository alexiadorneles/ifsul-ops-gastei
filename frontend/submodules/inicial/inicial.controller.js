export default function InicialController ($location, $scope, usuarioService,
  salarioService, authFactory, $localStorage) {

    init();

    function criarSalario(valor) {
      $scope.salario = {valor: valor, data: new Date()};
      logarUsuario(pegarUsuarioGoogle(), chamarSalarioService, authFactory.logout);
    }

    function chamarSalarioService(sucesso) {
      salarioService
      .criar($scope.salario)
      .then(() => {
        delete $localStorage.usuarioGoogle;
        mensagemLogin(sucesso);
      });
    }

    function logarUsuario (usuario, funcaoSucesso, funcaoErro) {
      authFactory.logarUsuario(usuario)
      .then((response) => authFactory.loginSucesso(response))
      .then(() => funcaoSucesso(true), () => funcaoErro(false));
    }

    function mensagemLogin(sucesso) {
      if (sucesso) {
        return swal({
          title: "Login realizado com sucesso!",
          text: 'Bem vindo.',
          timer: 2000,
          showConfirmButton: false
        });
      } else {
        swal({
          title: "Erro ao logar!",
          text: "Houve algum erro com o login, por favor tente novamente!",
          type: "error",
          confirmButtonText: "OK"
        });
      }
    }

    // pega usuário montado na tela de login, com informações do google
    function pegarUsuarioGoogle() {
      return angular.copy($localStorage.usuarioGoogle);
    }

    function init() {
      $scope.criarSalario = criarSalario;

      let usuario = pegarUsuarioGoogle();
      // verifica se o usuario possui algum registro de salario
      salarioService
      .quantidadePorUsuario(usuario.id)
      .then(response => {
        if (response.data > 0) {
          // loga o usuario e redireciona para a tela de objetivos
          logarUsuario(usuario, mensagemLogin, mensagemLogin);
          delete $localStorage.usuarioGoogle;
        }
      });
    };

  }

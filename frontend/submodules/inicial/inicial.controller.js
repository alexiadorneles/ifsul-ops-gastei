export default function InicialController ($location, $scope, usuarioService,
  salarioService, authFactory, $localStorage) {

    init();

    function criarSalario(valor) {
      $scope.salario = {valor: valor, data: new Date()};
      logarUsuario(pegarUsuarioGoogle(), chamarSalarioService, chamarSalarioService);
    }

    function chamarSalarioService(sucesso) {
      debugger;
      salarioService
      .criar($scope.salario)
      .then(() => {
        delete $localStorage.usuarioGoogle;
        mensagemLogin(sucesso);
      });
    }

    function logarUsuario (usuario, funcaoSucesso, funcaoErro) {
      authFactory.login(usuario)
      .then(funcaoSucesso(true))
      .then(funcaoErro(false));
    }

    function mensagemLogin(sucesso) {
      if (sucesso) {
        return swal({
          title: "Login realizado com sucesso!",
          text: 'Bem vindo, '  + $localStorage.nome + '.',
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

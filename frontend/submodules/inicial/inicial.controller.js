export default function InicialController ($location, $scope, usuarioService,
  salarioService, authFactory, $localStorage) {
    var usuarioGoogle = init();

    function criarUsuario(usuario) {
      usuarioService
      .criar(usuarioGoogle)
      .then((res) => {
        logarECriarSalario(usuarioGoogle, usuario.salario, 0);
      });
    }


    function logarECriarSalario(usuario, valor, autenticado) {
      authFactory.login(usuario)
      .then(
        // executa caso dê tudo certo com o login
        () => {
          if (!autenticado) {
            criarSalario(valor);
          }
          mensagemLogin(usuario.nome, true);
          localStorage.setItem('nome', usuario.nome);
        },
        // executa caso houer algum erro no login
        () => {
          mensagemLogin('', false);
        });
      };

      function criarSalario(valor) {
        let salario = {valor: valor, data: new Date()}
        salarioService.criar(salario);
      }

      function mensagemLogin(nomeUsuario, sucesso) {
        if (sucesso) {
          return swal({
            title: "Login realizado com sucesso!",
            text: 'Bem vindo, '  + nomeUsuario + '.',
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

      function init() {
        var usuarioAux = angular.copy($localStorage.usuarioGoogle);
        delete $localStorage.usuarioGoogle;
        $scope.criarUsuario = criarUsuario;
        usuarioService
        .criar(usuarioAux)
        .then((res) => {
          if (res.data) {
            logarECriarSalario(usuarioAux, 0, res.data)
          }
        });
        return usuarioAux;
      }

    }

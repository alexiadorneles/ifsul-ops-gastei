// Factory de autenticação
export default function authFactory(authConfig, $http, $q, $location, $localStorage) {

  // Utiliza constant de configuração
  let urlUsuario = authConfig.urlUsuario;
  let urlLogin = authConfig.urlLogin;
  let urlPrivado = authConfig.urlPrivado;
  let urlLogout = authConfig.urlLogout;


  // LOGIN - Retorna PROMISE com o response (sucesso ou erro)
  function login(usuario) {
    let deferred = $q.defer();

    let headerAuth = montarHeader(usuario);

    $http({
      url: urlUsuario,
      method: 'GET',
      headers: headerAuth
    }).then(

      // Sucesso - HTTP 200
      function (response) {

        // Adiciona usuário e header ao localstorage
        $localStorage.usuarioLogado = response.data;
        $localStorage.headerAuth = montarHeader(usuario)['Authorization'];

        // Adiciona header de autenticação em todos os próximos requests
        $http.defaults.headers.common.Authorization = $localStorage.headerAuth;

        // Redireciona se tiver uma url configurada
        if (urlPrivado) {
          $location.path(urlPrivado);
        }

        // resolve promise com sucesso
        deferred.resolve(response);
      },

      // Erro
      function (response) {
        // resolve promise com erro
        deferred.reject(response);
      });

    // Retorna promise, sem resolver
    return deferred.promise;
  };



  // LOGOUT (sem retorno)
  function logout() {

    // Limpa localstorage e http headers adicionados
    delete $localStorage.usuarioLogado;
    delete $localStorage.Authorization;
    delete $localStorage.usuario;
    $http.defaults.headers.common.Authorization = undefined;

    // Redireciona se tiver uma url configurada
    if (urlLogout) {
      $location.path(urlLogout);
    }
  };

  function getUsuario() {
    return $localStorage.usuarioLogado;
  };

  function isAuthenticated() {
    return !!getUsuario();
  };

  // PROMISE

  function isAutenticadoPromise() {

    let deferred = $q.defer();

    if (isAuthenticated()) {
      deferred.resolve();

    } else {
      $location.path(urlLogin);
      deferred.reject();
    }

    return deferred.promise;
  };

  function isLoggedWithGoogle() {
    return !!$localStorage.usuarioGoogle;
  }

  function isLoggedWithGooglePromise() {

    let deferred = $q.defer();

    if (isLoggedWithGoogle()) {
      deferred.resolve();

    } else {
      $location.path(urlLogin);
      deferred.reject();
    }

    return deferred.promise;
  };

  function montarHeader(usuario) {
    let hash = window.btoa(`${usuario.email}:${usuario.senha}`);
    return {
      'Authorization': `Basic ${hash}`
    };
  };

  return {
    login: login,
    logout: logout,
    getUsuario: getUsuario,
    isAuthenticated: isAuthenticated,
    isAutenticadoPromise: isAutenticadoPromise,
    isLoggedWithGooglePromise: isLoggedWithGooglePromise
  };
}

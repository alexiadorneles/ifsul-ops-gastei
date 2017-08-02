// Factory de autenticação
export default function authFactory(authConfig, $http, $q, $location, $localStorage) {

  // Utiliza constant de configuração
  let urlUsuario = authConfig.urlUsuario;
  let urlLogin = authConfig.urlLogin;
  let urlPrivado = authConfig.urlPrivado;
  let urlLogout = authConfig.urlLogout;

  function logarUsuario(usuario) {
    $localStorage.headerAuth = montarHeader(usuario)['Authorization'];
    $http.defaults.headers.common.Authorization = $localStorage.headerAuth;
    return $http({
      url: urlUsuario,
      method: 'GET',
      headers: montarHeader(usuario)
    })
  };

  function loginSucesso (response) {
    let deferred = $q.defer();
    debugger;
    $localStorage.usuarioLogado = response.data;
    if (urlPrivado) {
      $location.path(urlPrivado);
    }
    deferred.resolve(response);
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
    logarUsuario: logarUsuario,
    loginSucesso: loginSucesso,
    logout: logout,
    getUsuario: getUsuario,
    isAuthenticated: isAuthenticated,
    isAutenticadoPromise: isAutenticadoPromise,
    isLoggedWithGooglePromise: isLoggedWithGooglePromise
  };
}

export default function usuarioService ($http) {

    let url = 'http://localhost8080/usuarios';

    function criar(usuario) {
      return $http.post(url, usuario);
    }

    return ({
        criar: criar
    });

};

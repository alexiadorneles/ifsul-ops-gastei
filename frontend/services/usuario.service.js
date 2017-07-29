export default function usuarioService ($http) {

    let url = 'http://localhost:8080/usuarios';

    function criar(usuario) {
      return $http.post(url, usuario);
    }

    return ({
        criar: criar
    });

};

export default function usuarioService ($http) {

    let url = 'http://localhost8080/usuarios';

    function criar(usuario) {
      return $http.post('http://localhost:8080/usuarios/salvar', usuario);
    }

    return ({
        criar: criar
    });

};

export default function salarioService ($http) {

    let url = 'http://localhost:8080/salarios';

    function criar(salario) {
      return $http.post(url, salario);
    }

    function buscarPorUsuario() {
      return $http.get(`${url}/usuario`);
    }

    function quantidadePorUsuario (idUsuario) {
      return $http.get(`${url}/count/${idUsuario}`);
    }

    return ({
        criar: criar,
        buscarPorUsuario: buscarPorUsuario,
        quantidadePorUsuario: quantidadePorUsuario
    });

};

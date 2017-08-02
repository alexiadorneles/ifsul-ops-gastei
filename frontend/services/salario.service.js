export default function salarioService ($http) {

    let url = 'http://localhost:8080/salarios';

    function criar(salario) {
      return $http.post(url, salario);
    }

    function buscarPorUsuario() {
      return $http.get(`${url}/usuario`);
    }

    return ({
        criar: criar,
        buscarPorUsuario: buscarPorUsuario
    });

};

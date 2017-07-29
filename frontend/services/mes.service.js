export default function mesService ($http) {

    let url = 'http://localhost8080/meses';

    function criar(mes) {
      return $http.post(url, mes);
    }

    function atualizar(mes) {
      return $http.post(url, mes);
    }

    function buscarTodos() {
      return $http.get(url);
    }

    return ({
        criar: criar,
        atualizar: atualizar,
        buscarTodos: buscarTodos
    });

};

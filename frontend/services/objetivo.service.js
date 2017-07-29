export default function objetivoService ($http) {

    let url = 'http://localhost8080/objetivos';

    function criar(objetivo) {
      return $http.post(url, objetivo);
    }

    function atualizar(objetivo) {
      return $http.post(url, objetivo);
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

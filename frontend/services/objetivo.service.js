export default function objetivoService ($http) {

    let url = 'http://localhost:8080/objetivos';

    function criar(objetivo) {
      return $http.post(url, objetivo);
    }

    function atualizar(objetivo) {
      return $http.post(url, objetivo);
    }

    function buscarTodos() {
      return $http.get(url);
    }

    function deletar(id) {
      return $http.delete(`${url}/${id}`)
    }

    return ({
        criar: criar,
        atualizar: atualizar,
        buscarTodos: buscarTodos,
        deletar: deletar
    });

};

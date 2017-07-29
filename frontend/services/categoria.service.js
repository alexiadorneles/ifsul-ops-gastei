export default function categoriaService ($http) {

    let url = 'http://localhost8080/categorias';

    function criar(categoria) {
      return $http.post(url, categoria);
    }

    function atualizar(categoria) {
      return $http.post(url, categoria);
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

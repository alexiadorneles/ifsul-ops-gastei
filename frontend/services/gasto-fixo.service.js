export default function gastoFixoService ($http) {

    let url = 'http://localhost:8080/gastos-fixos';

    function criar(gastoFixo) {
      return $http.post(url, gastoFixo);
    }

    function atualizar(categoria) {
      return $http.post(url, gastoFixo);
    }

    function buscarTodos() {
      return $http.get(url);
    }

    function buscarPorUsuario() {
      return $http.get(`${url}/usuario`);
    }
    function deletar(gastoFixo) {
      return $http.put(url, gastoFixo)

    }

    return ({
        criar: criar,
        atualizar: atualizar,
        buscarTodos: buscarTodos,
        buscarPorUsuario: buscarPorUsuario,
        deletar: deletar
    });

};

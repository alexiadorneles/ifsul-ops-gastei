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

    return ({
        criar: criar,
        atualizar: atualizar,
        buscarTodos: buscarTodos
    });

};

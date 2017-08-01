export default function salarioService ($http) {

    let url = 'http://localhost:8080/salarios';

    function criar(salario) {
      return $http.post(url, salario);
    }

    return ({
        criar: criar
    });

};

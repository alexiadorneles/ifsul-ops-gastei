import swal from 'sweetalert'
export default function AdicionarObjetivoController ($location, $scope, objetivoService, categoriaService){

  init();

  function objetivoAdicionado(nomeObjetivo){
    return swal({
      title: "Objetivo Adicionado!",
      text: `'${nomeObjetivo}' adicionado com sucesso.`,
      type: "success",
      html: true
    });
  }

  function adicionar(objetivo) {
    const data = new Date();
    objetivo.status = 'I';
    objetivo.data = data;
    objetivoService.criar(objetivo).then( () => {
      objetivoAdicionado(objetivo.nome);
      $location.url('/objetivo');
    })
  }

  function init() {
    $scope.objetivoAdicionado = objetivoAdicionado;
    $scope.adicionar = adicionar;

    categoriaService.buscarTodos().then(res => $scope.categorias = res.data);

  }

}

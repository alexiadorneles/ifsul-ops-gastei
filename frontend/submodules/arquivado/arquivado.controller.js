import swal from 'sweetalert'
export default function ArquivadoController ($location, $scope){
  $scope.desarquivar = desarquivar;

  function desarquivar(){
    swal({
    title: "Tem certeza?",
    text: "Desejas desarquivar o objetivo?",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Desarquivar",
    cancelButtonText: "Cancelar",
    closeOnConfirm: false,
    closeOnCancel: false
    },
    function(isConfirm){
      if (isConfirm) {
        swal("Desarquivado!", "O objetivo foi desarquivado.", "success");
      } else {
        swal("Cancelado", "Operação cancelada.", "error");
      }
    });
  }
}

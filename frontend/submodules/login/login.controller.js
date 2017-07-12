import swal from 'sweetalert'

export default function($location, $scope, angularAuth0, loginService){

  let vm = this
  vm.auth = loginService

}

import swal from 'sweetalert'
import angular from 'angular'
import ngRoute from 'angular-route'

// import styles
// import './directives/gasto-fixo.css'

// import controller
// import GastoFixoController from './directives/gasto-fixo.controller'

// import services
import categoriaService from '../../services/categoria.service'
import gastoFixoService from '../../services/gasto-fixo.service'


export default function gastoFixo() {
  return {
    restrict: 'E',
    templateUrl: './directives/gasto-fixo/gasto-fixo.html',
    controller: () => {
      alert("hey")
    }
  }
}

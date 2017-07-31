import angular from 'angular'
import ngRoute from 'angular-route'


// import services
import categoriaService from '../../services/categoria.service'
import gastoFixoService from '../../services/gasto-fixo.service'

export default angular.module('app.gasto_fixo', [ngRoute])
  .service("categoriaService", categoriaService)
  .service("gastoFixoService", gastoFixoService)
  .name;

import angular from 'angular'
import ngRoute from 'angular-route'

// import styles
import './gasto-fixo.css'

// import controller
import GastoFixoController from './gasto-fixo.controller'

// import services
import categoriaService from './../../services/categoria.service'

export default angular.module('app.gasto_fixo', [ngRoute])
  .controller('GastoFixoController', GastoFixoController)
  .service("categoriaService", categoriaService)
  .name;

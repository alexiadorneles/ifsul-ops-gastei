import angular from 'angular'
import ngRoute from 'angular-route'

import './gasto-fixo.css'
import GastoFixoController from './gasto-fixo.controller'

export default angular.module('app.gasto_fixo', [ngRoute])
  .controller('GastoFixoController', GastoFixoController)
  .name;

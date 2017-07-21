import angular from 'angular'
import ngRoute from 'angular-route'

import './gasto-fixo.css'
import './proximo.css'
import routing from './gasto-fixo.routes'
import GastoFixoController from './gasto-fixo.controller'

export default angular.module('app.gasto_fixo', [ngRoute])
  .config(routing)
  .controller('GastoFixoController', GastoFixoController)
  .name;

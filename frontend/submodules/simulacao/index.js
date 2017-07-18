import angular from 'angular'
import ngRoute from 'angular-route'

import './simulacao.css'
import routing from './simulacao.routes'
import SimulacaoController from './simulacao.controller'

export default angular.module('app.simulacao', [ngRoute])
  .config(routing)
  .controller('SimulacaoController', SimulacaoController)
  .name;

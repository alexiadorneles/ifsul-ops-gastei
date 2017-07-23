import angular from 'angular'
import ngRoute from 'angular-route'

import './simulacao.css'
import SimulacaoController from './simulacao.controller'

export default angular.module('app.simulacao', [ngRoute])
  .controller('SimulacaoController', SimulacaoController)
  .name;

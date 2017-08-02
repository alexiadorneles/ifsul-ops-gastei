import angular from 'angular'
import ngRoute from 'angular-route'

import './simulacao.css'
import SimulacaoController from './simulacao.controller'
import objetivoService from '../../services/objetivo.service'

export default angular.module('app.simulacao', [ngRoute])
  .controller('SimulacaoController', SimulacaoController)
  .service('objetivoService', objetivoService)
  .name;

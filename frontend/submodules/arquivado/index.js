import angular from 'angular'
import ngRoute from 'angular-route'

import './arquivado.css'
import ArquivadoController from './arquivado.controller'

export default angular.module('arquivado', [ngRoute])
  .controller('ArquivadoController', ArquivadoController)
  .name;

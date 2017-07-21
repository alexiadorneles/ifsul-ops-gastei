import angular from 'angular'
import ngRoute from 'angular-route'

import './arquivado.css'
import routing from './arquivado.routes'
import ArquivadoController from './arquivado.controller'

export default angular.module('arquivado', [ngRoute])
  .config(routing)
  .controller('ArquivadoController', ArquivadoController)
  .name;

import angular from 'angular'
import ngRoute from 'angular-route'

import './proximo.css'
import routing from './proximo.routes'
import ProximoController from './proximo.controller'

export default angular.module('app.proximo', [ngRoute])
  .config(routing)
  .controller('ProximoController', ProximoController)
  .name;

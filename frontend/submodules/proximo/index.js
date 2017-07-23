import angular from 'angular'
import ngRoute from 'angular-route'

import './proximo.css'
import ProximoController from './proximo.controller'

export default angular.module('app.proximo', [ngRoute])
  .controller('ProximoController', ProximoController)
  .name;

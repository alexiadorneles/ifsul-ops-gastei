import angular from 'angular'
import ngRoute from 'angular-route'

import InicialController from './inicial.controller'

export default angular.module('app.inicial', [ngRoute])
  .controller('InicialController', InicialController)
  .name;

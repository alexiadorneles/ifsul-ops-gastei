import angular from 'angular'
import ngRoute from 'angular-route'

import InicialController from './inicial.controller'
import salarioService from '../../services/salario.service'

export default angular.module('app.inicial', [ngRoute])
  .controller('InicialController', InicialController)
  .service('salarioService', salarioService)
  .name;

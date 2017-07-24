import angular from 'angular'
import ngRoute from 'angular-route'

import './objetivo.css'
import ObjetivoController from './objetivo.controller'

export default angular.module('app.objetivo', [ngRoute])
  .controller('ObjetivoController', ObjetivoController)
  .name;

import angular from 'angular'
import ngRoute from 'angular-route'

import './objetivo.css'
import ObjetivoController from './objetivo.controller'

import objetivoService from '../../services/objetivo.service'

export default angular.module('app.objetivo', [ngRoute])
  .controller('ObjetivoController', ObjetivoController)
  .service('objetivoService', objetivoService)
  .name;

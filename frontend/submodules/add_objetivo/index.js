import angular from 'angular'
import ngRoute from 'angular-route'

import './add_objetivo.css'
import AdicionarObjetivoController from './add_objetivo.controller'

export default angular.module('app.add_objetivo', [ngRoute])
  .controller('AdicionarObjetivoController', AdicionarObjetivoController)
  .name;

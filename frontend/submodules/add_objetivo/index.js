import angular from 'angular'
import ngRoute from 'angular-route'

import './add_objetivo.css'
import routing from './add_objetivo.routes'
import AdicionarObjetivoController from './add_objetivo.controller'

export default angular.module('app.add_objetivo', [ngRoute])
  .config(routing)
  .controller('AdicionarObjetivoController', AdicionarObjetivoController)
  .name;

import angular from 'angular'
import ngRoute from 'angular-route'

import './anterior.css'
import routing from './anterior.routes'
import AnteriorController from './anterior.controller'

export default angular.module('app.anterior', [ngRoute])
  .config(routing)
  .controller('AnteriorController', AnteriorController)
  .name;

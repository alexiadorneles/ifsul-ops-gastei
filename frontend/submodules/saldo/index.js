import angular from 'angular'
import ngRoute from 'angular-route'

import './anterior.css'
import AnteriorController from './anterior.controller'

export default angular.module('app.anterior', [ngRoute])
  .controller('AnteriorController', AnteriorController)
  .name;

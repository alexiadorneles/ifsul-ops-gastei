import angular from 'angular'
import ngRoute from 'angular-route'

import './saldo.css'
import AnteriorController from './saldo.controller'

export default angular.module('app.saldo', [ngRoute])
  .controller('SaldoController', AnteriorController)
  .name;

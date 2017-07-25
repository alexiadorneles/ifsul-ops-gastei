import angular from 'angular'
import ngRoute from 'angular-route'

import './editar-perfil.css'
import AnteriorController from './editar-perfil.controller'

export default angular.module('app.editar-perfil', [ngRoute])
  .controller('EditarPerfilController', AnteriorController)
  .name;

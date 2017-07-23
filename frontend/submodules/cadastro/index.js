import angular from 'angular'
import ngRoute from 'angular-route'

import CadastroController from './cadastro.controller'

export default angular.module('app.cadastro', [ngRoute])
  .controller('CadastroController', CadastroController)
  .name;
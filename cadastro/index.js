import angular from 'angular'
import ngRoute from 'angular-route'

import routing from './cadastro.routes'
import CadastroController from './cadastro.controller'

export default angular.module('app.cadastro', [ngRoute])
  .config(routing)
  .controller('CadastroController', CadastroController)
  .name;
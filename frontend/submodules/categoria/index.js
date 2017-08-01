import angular from 'angular'
import ngRoute from 'angular-route'

import './categoria.css'
import CategoriaController from './categoria.controller'

export default angular.module('app.categoria', [ngRoute])
  .controller('CategoriaController', CategoriaController)
  .name;

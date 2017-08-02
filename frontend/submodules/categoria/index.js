import angular from 'angular'
import ngRoute from 'angular-route'

import './categoria.css'
import CategoriaController from './categoria.controller'

import categoriaService from '../../services/categoria.service'

export default angular.module('app.categoria', [ngRoute])
  .controller('CategoriaController', CategoriaController)
  .service('categoriaService', categoriaService)
  .name;

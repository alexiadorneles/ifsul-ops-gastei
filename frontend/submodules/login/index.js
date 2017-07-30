import angular from 'angular'
import ngRoute from 'angular-route'

import './login.scss'
import config from './login.config'
import LoginController from './login.controller'
import authFactory from './auth.service'
import usuarioService from '../../services/usuario.service'

export default angular.module('app.login', [ngRoute])
    .config(config)
    .controller("LoginController", LoginController)
    .service("usuarioService", usuarioService)
    .factory("authFactory", authFactory)
    .name;

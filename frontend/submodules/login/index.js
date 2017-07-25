import angular from 'angular'
import ngRoute from 'angular-route'

import './login.scss'
import config from './login.config'
import LoginController from './login.controller'
import {authFactory, headerConfig} from './auth.service'

export default angular.module('app.login', [ngRoute])
    .config(config)
    .controller("LoginController", LoginController)
    .service("authService", headerConfig)
    .factory("authFactory", authFactory)
    .name;
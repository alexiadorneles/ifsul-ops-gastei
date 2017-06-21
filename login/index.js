import angular from 'angular'
import ngRoute from 'angular-route'

import router from './login.routes'
import LoginController from './login.controller'

export default angular.module('app.login', [ngRoute])
    .config(router)
    .controller("LoginController", LoginController)
    .name
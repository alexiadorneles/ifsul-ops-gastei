import angular from 'angular'
import ngRoute from 'angular-route'
import angularAuth0 from 'angular-auth0'

import './login.scss'
import config from './login.config'
import LoginController from './login.controller'
import loginService from './login.service'

export default angular.module('app.login', [ngRoute, angularAuth0])
    .config(config)
    .controller("LoginController", LoginController)
    .controller('CallbackController', () => {})
    .service("loginService", loginService)
    .run(run)
    .name;

function run(loginService) {
    loginService.handleAuthentication();
}

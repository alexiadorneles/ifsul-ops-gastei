import angular from 'angular';
import ngRoute from 'angular-route';
import './css/style.css';

import routing from './app.route';

import cadastro from './cadastro';
import login from './login'

angular.module('app', [ngRoute, cadastro, login])
    .config(routing)


import angular from 'angular';
import ngRoute from 'angular-route';
import './assets/css/style.css';

import routing from './app.route';

import objetivo from './submodules/objetivo';
import cadastro from './submodules/cadastro';
import login from './submodules/login'


angular.module('app', [ngRoute, objetivo, cadastro, login])
    .config(routing)

import angular from 'angular';
import ngRoute from 'angular-route';
import 'sweetalert/dist/sweetalert.css'
import './assets/css/style.css';

import routing from './app.route';

import anterior from './submodules/anterior';
import objetivo from './submodules/objetivo';
import add_objetivo from './submodules/add_objetivo';
import cadastro from './submodules/cadastro';
import login from './submodules/login'


angular.module('app', [ngRoute, anterior, objetivo, add_objetivo, cadastro, login])
    .config(routing)

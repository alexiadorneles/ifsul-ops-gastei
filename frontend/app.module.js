// import angular libs
import angular from 'angular'
import ngRoute from 'angular-route'
import ngstorage from 'ngstorage-webpack'

// import global styles
import 'sweetalert/dist/sweetalert.css'
import './assets/css/style.css'
import './directives/navbar/navbar.scss'
import './directives/menu/menu.scss'
import './directives/gasto-fixo/gasto-fixo.css'

// import routing configs
import routing from './app.route'

// import submodules
import anterior from './submodules/anterior'
import proximo from './submodules/proximo'
import objetivo from './submodules/objetivo'
import add_objetivo from './submodules/add_objetivo'
import arquivado from './submodules/arquivado'
import simulacao from './submodules/simulacao'
import cadastro from './submodules/cadastro'
import login from './submodules/login'
import gasto_fixo from './submodules/gasto_fixo'
import inicial from './submodules/inicial'
import categoria from './submodules/categoria'
import home from './submodules/home'


// import directives
import navbar from './directives/navbar'
import menu from './directives/menu'
import gastoFixo from './directives/gasto-fixo'

angular.module('app', [ngRoute, ngstorage, anterior, proximo, objetivo, add_objetivo,
  arquivado, simulacao, cadastro, categoria, login, gasto_fixo, home])
  .directive('navbar', navbar)
  .directive('menu', menu)
  .directive('gastoFixo', gastoFixo)
  .config(routing)
  .constant('authConfig', {

    // Rota da API para autenticação de User
    urlUsuario: "http://localhost:8080/authenticated-user",

    // Rota segura
    urlPrivado: "/objetivo",

    urlLogin: "/login",

    urlLogout: "/login"
  })

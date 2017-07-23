// import angular libs
import angular from 'angular'
import ngRoute from 'angular-route'

// import global styles
import 'sweetalert/dist/sweetalert.css'
import './assets/css/style.css'

// import routing configs
import routing from './app.route'

// import submodules
import anterior     from './submodules/anterior'
import proximo      from './submodules/proximo'
import objetivo     from './submodules/objetivo'
import add_objetivo from './submodules/add_objetivo'
import arquivado    from './submodules/arquivado'
import simulacao    from './submodules/simulacao'
import cadastro     from './submodules/cadastro'
import login        from './submodules/login'
import gasto_fixo   from './submodules/gasto_fixo'


angular.module('app', [ngRoute, anterior, proximo, objetivo, add_objetivo, arquivado, simulacao,
  cadastro, login, gasto_fixo])
    .config(routing)
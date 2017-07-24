// import angular libs
import angular from 'angular'
import ngRoute from 'angular-route'

// import styles
import './home.scss'

// import controller
import HomeController from './home.controller'

export default angular.module('app.home', [ngRoute])
    .controller("HomeController", HomeController)
    .name
"use strict";

import CatalogueController from 'controllers/CatalogueController';
import PhoneController from 'controllers/PhoneController';

let app = angular.module('PhoneApplication',[
    'ngRoute'
]);

app.config( [ '$routeProvider' , '$locationProvider'  , ($routeProvider , $locationProvider)=>{

    $locationProvider.html5Mode(true);

    $routeProvider.when('/' , {

        templateUrl: 'public/templates/catalogue.html',
        controller: [  '$scope' , '$http'  , CatalogueController ]

    });

} ] );
"use strict";

import CatalogueController from './controllers/CatalogueController';
import PhoneController from './controllers/PhoneController';

let app = angular.module('PhoneApplication',[
    'ngRoute'
]);

app.config( [ '$routeProvider' , '$locationProvider'  , ($routeProvider , $locationProvider)=>{

    console.log('config!');

    $locationProvider.html5Mode(true);

    $routeProvider.when('/' , {

        templateUrl: 'templates/catalogue.html',
        controller: [  '$scope' , '$http'  , CatalogueController ]

    });

    $routeProvider.when('/single-phone/:phoneID' , {

        controller: [ '$scope', '$http' , '$routeParams' , PhoneController],
        templateUrl: 'templates/single-phone.html'

    });

} ] );

app.run();
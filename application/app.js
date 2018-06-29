"use strict";

import CatalogueController from './controllers/CatalogueController';
import PhoneController from './controllers/PhoneController';
import CartController from './controllers/CartController';

angular.module('PhoneApplication.controllers' , []);

angular.module('PhoneApplication.controllers')
    .controller(
        'CartController' ,
        ['$scope' , CartController]
    );



let app = angular.module('PhoneApplication',[
    'ngRoute',
    'PhoneApplication.controllers'
]);



app.config( [ '$routeProvider' , '$locationProvider'  , ($routeProvider , $locationProvider)=>{

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
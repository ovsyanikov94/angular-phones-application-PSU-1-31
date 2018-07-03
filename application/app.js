"use strict";

//====================CONTROLLERS===========================//
import CatalogueController from './controllers/CatalogueController';
import PhoneController from './controllers/PhoneController';
import CartController from './controllers/CartController';

//====================SERVICES==============================//
import CartService from './services/CartService';
import PhoneService from './services/PhoneService';

//====================FILTERS==============================//
import SearchPhonesFilter from './filters/SearchPhonesFilter';

angular.module('PhoneApplication.controllers' , []);
angular.module('PhoneApplication.services' , []);
angular.module('PhoneApplication.filters' , []);

angular.module('PhoneApplication.controllers')
    .controller(
        'CartController' ,
        ['$scope' , 'CartService' , CartController]
    );


angular.module('PhoneApplication.filters')
    .filter('SearchPhonesFilter' ,  SearchPhonesFilter); // test | SearchPhonesFilter

angular.module('PhoneApplication.controllers')
    .controller(
        'ExampleController' ,
        ['$scope' , 'PhoneService' , ( $scope , PhoneService )=>{

            $scope.searchObject = PhoneService.getSearchObject();

        }]
    );

angular.module('PhoneApplication.services')
    .service( 'CartService'  ,[ '$cookies' , CartService ]);

angular.module('PhoneApplication.services')
    .service( 'PhoneService'  , [ '$http' , PhoneService ]);

let app = angular.module('PhoneApplication',[
    'ngRoute',
    'ngCookies',
    'PhoneApplication.controllers',
    'PhoneApplication.filters',
    'PhoneApplication.services'
]);



app.config( [ '$routeProvider' , '$locationProvider' , '$cookiesProvider' , ($routeProvider , $locationProvider , $cookiesProvider)=>{

    $locationProvider.html5Mode(true);

    $cookiesProvider.defaults.path = '/';

    let expires = new Date();
    expires.setDate( expires.getDate() + 3 );

    $cookiesProvider.defaults.expires = expires;

    $routeProvider.when('/' , {

        templateUrl: 'templates/catalogue.html',
        controller: [  '$scope' , 'PhoneService', CatalogueController ]

    });

    $routeProvider.when('/single-phone/:phoneID' , {

        controller: [ '$scope', '$routeParams' , 'CartService' , 'PhoneService' , PhoneController],
        templateUrl: 'templates/single-phone.html'

    });

} ] );

app.run();
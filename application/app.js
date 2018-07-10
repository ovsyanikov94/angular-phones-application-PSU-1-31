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
import DescriptionFilter from './filters/DescriptionFilter';

//====================DIRECTIVES==============================//
import PhonesList from './directives/phones-list';
import SinglePhoneDirective from './directives/single-phone-directive';
import CartDirective from './directives/cart-directive';


angular.module('PhoneApplication.controllers' , []);
angular.module('PhoneApplication.services' , []);
angular.module('PhoneApplication.filters' , []);
angular.module('PhoneApplication.directives' , []);

angular.module('PhoneApplication.controllers')
    .controller(
        'CartController' ,
        ['$scope' , 'CartService' , CartController]
    );


angular.module('PhoneApplication.filters')
    .filter('SearchPhonesFilter' ,  SearchPhonesFilter); // test | SearchPhonesFilter

angular.module('PhoneApplication.filters')
    .filter('DescriptionFilter' ,  DescriptionFilter); // test | DescriptionFilter

angular.module('PhoneApplication.controllers')
    .controller(
        'ExampleController' ,
        ['$scope' , 'PhoneService' , ( $scope , PhoneService )=>{

            $scope.searchObject = PhoneService.getSearchObject();

        }]
    );

angular.module('PhoneApplication.services')
    .service( 'CartService'  ,[ 'localStorageService' , 'PhoneService' , CartService ]);

angular.module('PhoneApplication.services')
    .service( 'PhoneService'  , [ '$http' , PhoneService ]);

angular.module('PhoneApplication.directives' )
    .directive('phonesListDirective' , PhonesList);

angular.module('PhoneApplication.directives' )
    .directive('singlePhoneDirective' , SinglePhoneDirective);

angular.module('PhoneApplication.directives' )
    .directive('cartDirective' , CartDirective);


let app = angular.module('PhoneApplication',[
    'angular-loading-bar',
    'ngRoute',
    'LocalStorageModule',
    'PhoneApplication.controllers',
    'PhoneApplication.filters',
    'PhoneApplication.services',
    'PhoneApplication.directives'
]);

app.config( [
    '$routeProvider' ,
    '$locationProvider' ,
    'localStorageServiceProvider' ,
    'cfpLoadingBarProvider',
    ($routeProvider , $locationProvider , localStorageServiceProvider , cfpLoadingBarProvider)=>{

    $locationProvider.html5Mode(true);

    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.includeBar = true;

    localStorageServiceProvider.setStorageCookie( 7 , '/' );
    localStorageServiceProvider.setStorageCookieDomain('localhost');

    $routeProvider.when('/' , {

        templateUrl: 'templates/catalogue.html',
        controller: [  '$scope' , 'PhoneService' , 'phones' , CatalogueController ],
        resolve: {
            'phones': [ 'PhoneService' , function (PhoneService){
                return PhoneService.getPhones(`phones/phones.json`);
            }]
        }

    });

    $routeProvider.when('/single-phone/:phoneID' , {

        controller: [ '$scope' , 'phone', PhoneController ],
        templateUrl: 'templates/single-phone.html',
        resolve: {

            'phone': [ 'PhoneService' ,  '$route' , function ( PhoneService , $route ){

                let id = $route.current.params.phoneID;

                return PhoneService.getSinglePhone(`phones/${id}.json`);

            } ]

        }

    });

    $routeProvider.when('/cart' , {

        templateUrl: 'templates/cart.html',
        controller: [ '$scope' , 'phones' , function ($scope , phones ){

            $scope.phones = phones;

        } ],
        resolve: {

            'phones': [ 'CartService' , async function ( CartService ){
                return await  CartService.getFullPhones();
            }]

        }

    });

} ] );

app.run();
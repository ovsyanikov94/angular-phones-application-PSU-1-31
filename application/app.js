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

//====================DIRECTIVES==============================//
import PhonesList from './directives/phones-list';

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

angular.module('PhoneApplication.controllers')
    .controller(
        'ExampleController' ,
        ['$scope' , 'PhoneService' , ( $scope , PhoneService )=>{

            $scope.searchObject = PhoneService.getSearchObject();

        }]
    );

angular.module('PhoneApplication.services')
    .service( 'CartService'  ,[ 'localStorageService' , CartService ]);

angular.module('PhoneApplication.services')
    .service( 'PhoneService'  , [ '$http' , PhoneService ]);

angular.module('PhoneApplication.directives' )
    .directive('phonesListDirective' , PhonesList);

let app = angular.module('PhoneApplication',[
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
    ($routeProvider , $locationProvider , localStorageServiceProvider)=>{

    $locationProvider.html5Mode(true);

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

        controller: [ '$scope', '$routeParams' , 'CartService' , 'PhoneService' , PhoneController],
        templateUrl: 'templates/single-phone.html'

    });

} ] );

app.run();
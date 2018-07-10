/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/app.js":
/*!****************************!*\
  !*** ./application/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_CatalogueController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/CatalogueController */ "./application/controllers/CatalogueController.js");
/* harmony import */ var _controllers_PhoneController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/PhoneController */ "./application/controllers/PhoneController.js");
/* harmony import */ var _controllers_CartController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/CartController */ "./application/controllers/CartController.js");
/* harmony import */ var _services_CartService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/CartService */ "./application/services/CartService.js");
/* harmony import */ var _services_PhoneService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/PhoneService */ "./application/services/PhoneService.js");
/* harmony import */ var _filters_SearchPhonesFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters/SearchPhonesFilter */ "./application/filters/SearchPhonesFilter.js");
/* harmony import */ var _filters_DescriptionFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters/DescriptionFilter */ "./application/filters/DescriptionFilter.js");
/* harmony import */ var _directives_phones_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/phones-list */ "./application/directives/phones-list.js");
/* harmony import */ var _directives_single_phone_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/single-phone-directive */ "./application/directives/single-phone-directive.js");
/* harmony import */ var _directives_cart_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/cart-directive */ "./application/directives/cart-directive.js");


//====================CONTROLLERS===========================//




//====================SERVICES==============================//



//====================FILTERS==============================//



//====================DIRECTIVES==============================//





angular.module('PhoneApplication.controllers' , []);
angular.module('PhoneApplication.services' , []);
angular.module('PhoneApplication.filters' , []);
angular.module('PhoneApplication.directives' , []);

angular.module('PhoneApplication.controllers')
    .controller(
        'CartController' ,
        ['$scope' , 'CartService' , _controllers_CartController__WEBPACK_IMPORTED_MODULE_2__["default"]]
    );


angular.module('PhoneApplication.filters')
    .filter('SearchPhonesFilter' ,  _filters_SearchPhonesFilter__WEBPACK_IMPORTED_MODULE_5__["default"]); // test | SearchPhonesFilter

angular.module('PhoneApplication.filters')
    .filter('DescriptionFilter' ,  _filters_DescriptionFilter__WEBPACK_IMPORTED_MODULE_6__["default"]); // test | DescriptionFilter

angular.module('PhoneApplication.controllers')
    .controller(
        'ExampleController' ,
        ['$scope' , 'PhoneService' , ( $scope , PhoneService )=>{

            $scope.searchObject = PhoneService.getSearchObject();

        }]
    );

angular.module('PhoneApplication.services')
    .service( 'CartService'  ,[ 'localStorageService' , 'PhoneService' , _services_CartService__WEBPACK_IMPORTED_MODULE_3__["default"] ]);

angular.module('PhoneApplication.services')
    .service( 'PhoneService'  , [ '$http' , _services_PhoneService__WEBPACK_IMPORTED_MODULE_4__["default"] ]);

angular.module('PhoneApplication.directives' )
    .directive('phonesListDirective' , _directives_phones_list__WEBPACK_IMPORTED_MODULE_7__["default"]);

angular.module('PhoneApplication.directives' )
    .directive('singlePhoneDirective' , _directives_single_phone_directive__WEBPACK_IMPORTED_MODULE_8__["default"]);

angular.module('PhoneApplication.directives' )
    .directive('cartDirective' , _directives_cart_directive__WEBPACK_IMPORTED_MODULE_9__["default"]);


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
        controller: [  '$scope' , 'PhoneService' , 'phones' , _controllers_CatalogueController__WEBPACK_IMPORTED_MODULE_0__["default"] ],
        resolve: {
            'phones': [ 'PhoneService' , function (PhoneService){
                return PhoneService.getPhones(`phones/phones.json`);
            }]
        }

    });

    $routeProvider.when('/single-phone/:phoneID' , {

        controller: [ '$scope' , 'phone', _controllers_PhoneController__WEBPACK_IMPORTED_MODULE_1__["default"] ],
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

/***/ }),

/***/ "./application/controllers/CartController.js":
/*!***************************************************!*\
  !*** ./application/controllers/CartController.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartController; });


class CartController{

    constructor( $scope , CartService ){

        $scope.cart = CartService.getCart();

        $scope.RemoveItem = function ( index ){
            CartService.removePhone( index );

        };

        $scope.ClearCart = function (){

            CartService.clearCart();

        };

    }

};

/***/ }),

/***/ "./application/controllers/CatalogueController.js":
/*!********************************************************!*\
  !*** ./application/controllers/CatalogueController.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogueController; });


class CatalogueController{

    constructor( $scope , PhoneService , phones ){

        $scope.searchObject = PhoneService.getSearchObject();

        $scope.phones = phones;

        //setInterval( PhoneService.getPhones.bind(PhoneService , `phones/phones.json`) , 20 );

    }//constructor

}

/***/ }),

/***/ "./application/controllers/PhoneController.js":
/*!****************************************************!*\
  !*** ./application/controllers/PhoneController.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhoneController; });


class PhoneController{

    constructor($scope , phone ){

        $scope.phone = phone;
        $scope.thumbnail = `${phone.images[0]}`;

    }

}

/***/ }),

/***/ "./application/directives/cart-directive.js":
/*!**************************************************!*\
  !*** ./application/directives/cart-directive.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartDirective; });



function CartDirective(){

    return {

        restrict: 'AE',
        scope:{
            phones: '='
        },
        templateUrl: 'templates/directives/cart-directive.html',
        controller: ['$scope' , 'CartService' , function ( $scope , CartService ){

            $scope.cart = CartService.getCart();

            CartService.OnItemRemove( ( index )=>{

                $scope.phones.splice(index , 1);

            } );

            // $scope.$watch( 'cart.length' , async function (){
            //
            //     $scope.phones = await CartService.getFullPhones();
            //     $scope.$apply();
            //
            // } );
            
            $scope.SetAmount = function ( index , amount ){

                $scope.cart[index].amount += amount;
                $scope.phones[index].amount += amount;

                if( $scope.cart[index].amount === 0 ){

                    $scope.cart.splice( index , 1 );
                    $scope.phones.splice( index , 1 );

                }//if

            }

            $scope.RemovePhone = function ( index ){

                $scope.cart.splice( index , 1 );
                $scope.phones.splice( index , 1 );

            }//RemovePhone

        }]

    };

}//CartDirective

/***/ }),

/***/ "./application/directives/phones-list.js":
/*!***********************************************!*\
  !*** ./application/directives/phones-list.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhonesList; });



function PhonesList(){

    return {

        restrict: 'EAC',
        scope:{
            queryObject: '=searchObject',
            phones: '=phonesListArray' // -> in html attribute === phones-list-array="phones"
            //phones: '=' -> in html attribute === phones="phones"
        },//scope
        templateUrl: 'templates/directives/phones-list.html',
        controller: ['$scope' , function ( $scope ){

            $scope.phoneImageClick = function ( url ){

                alert(url);

            }

        }]

    }//return

}//PhonesList

/***/ }),

/***/ "./application/directives/single-phone-directive.js":
/*!**********************************************************!*\
  !*** ./application/directives/single-phone-directive.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SinglePhoneDirective; });


function SinglePhoneDirective(){

    return {

        restrict: 'EA',
        scope:{
            phone: '=',
            thumbnail: '='
        },
        templateUrl: 'templates/directives/single-phone-directive.html',
        controller: [ '$scope' , 'CartService' , function ( $scope , CartService){

            $scope.addPhoneToCart = function ( phone ){
                CartService.addPhone( phone );
            };

            $scope.setThumbnail = function (photo){
                $scope.thumbnail = photo;
            };

        } ],
        link: function ( scope, element, attrs, controller ){

            $(document).ready( ()=>{

                $('#PhonesOwlCarousel').owlCarousel({
                    items: 2,
                    nav: true,
                    autoWidth: true,
                    margin: 10
                });

            } );

        },

    }

} //SinglePhoneDirective

/***/ }),

/***/ "./application/filters/DescriptionFilter.js":
/*!**************************************************!*\
  !*** ./application/filters/DescriptionFilter.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DescriptionFilter; });


function DescriptionFilter(){

    return function ( str , maxLength){

        return str.length < maxLength ? str : `${str.substring(0 , maxLength)}...`;

    }

}

/***/ }),

/***/ "./application/filters/SearchPhonesFilter.js":
/*!***************************************************!*\
  !*** ./application/filters/SearchPhonesFilter.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchPhonesFilter; });


function SearchPhonesFilter(){

    return function ( phones , searchString ){

        return phones.filter(
                p =>
                    p.name.toLowerCase()
                          .indexOf( searchString.toLowerCase() ) !== -1
        );

    }// fd

}//SearchPhonesFilter


/***/ }),

/***/ "./application/services/CartService.js":
/*!*********************************************!*\
  !*** ./application/services/CartService.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartService; });



class CartService{

    constructor( localStorageService , PhoneService ){

       if(localStorageService.get('cart')){
           this.cart = localStorageService.get('cart');
       }//if
       else{
           this.cart = [];
       }//else

       this.localStorageService = localStorageService;
       this._phoneService = PhoneService;

    }//constructor

    getCart(){
        return this.cart;
    }

    addPhone( phone ){

        let exists = this.cart.some( p => {
            return p.id === phone.id;
        } );

        if(!exists){
            this.cart.push( this._getSimplePhone( phone ) );
        }//if
        else{

            for ( let i = 0 ; i < this.cart.length ;  i++ ){

                let p = this.cart[i];

                if(p.id === phone.id){

                    p.amount++;

                    break;

                }//if

            }//for i

        }//else

        this.localStorageService.set( 'cart' , this.cart );

    }

    _getSimplePhone( phone ){

        return {
            'id' : phone.id,
            'amount' : phone.amount || 1,
            'name' : phone.name,
        };

    }

    clearCart(){

        this.localStorageService.clearAll();
        this.cart.length = 0;

    }

    OnItemRemove ( callback ){
        this._removeCallback = callback;
    }

    removePhone( index ){

        this.cart.splice( index , 1 );

        if( this._removeCallback ){
            this._removeCallback(index);
        }//if

        this.localStorageService.set( 'cart' , this.cart );

    }//removePhone

    async getFullPhones () {

        let phones = [];

        for ( let i = 0 ; i < this.cart.length ; i++  ){

            let cartPhone = this.cart[i];
            let phone = await this._phoneService.getSinglePhone( `phones/${cartPhone.id}.json` );
            phone.amount = cartPhone.amount;

            phones.push( phone );

        }//for i

        return phones;

    }

}


/***/ }),

/***/ "./application/services/PhoneService.js":
/*!**********************************************!*\
  !*** ./application/services/PhoneService.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhoneService; });


class PhoneService{

    constructor( $http ){

        this.$http = $http;
        this.searchObject = {
            'searchString': ''
        };

    }

    async getPhones( url ){

        try{
            let result = await this.$http.get( url );

            return result.data;

        }//try
        catch(ex){

            console.log("Exception: getPhones" , ex);
            return [];

        }//catch
    }

    getSearchObject(){
        return this.searchObject;
    }

    async getSinglePhone( url ){

        try{
            let result = await this.$http.get( url );

            return result.data;

        }//try
        catch(ex){

            console.log("Exception: getSinglePhone: " , ex);
            return null;

        }//catch

    }

}


/***/ })

/******/ });
//# sourceMappingURL=index.js.map
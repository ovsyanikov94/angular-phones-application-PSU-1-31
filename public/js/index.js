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






angular.module('PhoneApplication.controllers' , []);

angular.module('PhoneApplication.controllers')
    .controller(
        'CartController' ,
        ['$scope' , _controllers_CartController__WEBPACK_IMPORTED_MODULE_2__["default"]]
    );



let app = angular.module('PhoneApplication',[
    'ngRoute',
    'PhoneApplication.controllers'
]);



app.config( [ '$routeProvider' , '$locationProvider'  , ($routeProvider , $locationProvider)=>{

    $locationProvider.html5Mode(true);

    $routeProvider.when('/' , {

        templateUrl: 'templates/catalogue.html',
        controller: [  '$scope' , '$http'  , _controllers_CatalogueController__WEBPACK_IMPORTED_MODULE_0__["default"] ]

    });

    $routeProvider.when('/single-phone/:phoneID' , {

        controller: [ '$scope', '$http' , '$routeParams' , _controllers_PhoneController__WEBPACK_IMPORTED_MODULE_1__["default"]],
        templateUrl: 'templates/single-phone.html'

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

    constructor( $scope ){

        $scope.cart = [];
        $scope.addPhoneToCart = this._addPhone.bind(this , $scope);
        $scope.RemoveItem = this._removePhone.bind( null , $scope );

    }

    _addPhone( $scope , phone){

        let exists = $scope.cart.some( p => {
            return p.id === phone.id;
        } );

        if(!exists){
            $scope.cart.push( this._getSimplePhone( phone ) );
        }//if
        else{

            for ( let i = 0 ; i < $scope.cart.length ;  i++ ){

                let p = $scope.cart[i];

                if(p.id === phone.id){

                    p.amount++;

                    break;

                }//if

            }//for i

        }//else

    }//_addPhone

    _removePhone( $scope , index ){

       $scope.cart.splice( index , 1 );

    }

    _getSimplePhone( phone ){

        return {
            'id' : phone.id,
            'amount' : phone.amount || 1,
            'name' : phone.name,
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

    constructor( $scope , $http ){


        $http.get(`phones/phones.json`)
            .then( response => {
                $scope.phones = response.data;
            } )
            .catch( error => {
                console.log("EXCEPTION: " , error)
            } )


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

    constructor($scope, $http , $routeParams ){

        let id = $routeParams.phoneID;

        $http.get(`phones/${id}.json`)
            .then( response => {

                $scope.phone = response.data;
                $scope.thumbnail = $scope.phone.images[0];

            } )
            .catch( error => {
                console.log("EXCEPTION: " , error)
            } )

        //this.$scope = $scope;

        $scope.setThumbnail = this._setThumbnail.bind( this, $scope );

    }

    _setThumbnail($scope , photo ){
        //angularJS => ng-click => _setThumbnail.call( this , $scope , photo )
        $scope.thumbnail = photo;

    }//_setThumbnail

}

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
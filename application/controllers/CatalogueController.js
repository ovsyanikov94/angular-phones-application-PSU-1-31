"use strict";

export default class CatalogueController{

    constructor( $scope , PhoneService , phones ){

        $scope.searchObject = PhoneService.getSearchObject();

        $scope.phones = phones;

    }//constructor

}
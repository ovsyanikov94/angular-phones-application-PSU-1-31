"use strict";

export default class CatalogueController{

    constructor( $scope , PhoneService , phones ){

        $scope.searchObject = PhoneService.getSearchObject();

        $scope.phones = phones;

        //setInterval( PhoneService.getPhones.bind(PhoneService , `phones/phones.json`) , 20 );

    }//constructor

}
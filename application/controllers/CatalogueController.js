"use strict";

export default class CatalogueController{

    constructor( $scope , PhoneService){

        $scope.searchObject = PhoneService.getSearchObject();

        PhoneService.getPhones(`phones/phones.json`)
            .then( phones => {
                console.log('phones' , phones);
                $scope.phones = phones;
                $scope.$apply();

            } )
            .catch( error => {
                console.log("EXCEPTION: " , error)
            } )


    }//constructor

}
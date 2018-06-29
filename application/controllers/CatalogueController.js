"use strict";

export default class CatalogueController{

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
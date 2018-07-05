"use strict";

export  default class PhoneController{

    constructor($scope, $routeParams , CartService , PhoneService){

        let id = $routeParams.phoneID;

        $scope.addPhoneToCart = function ( phone ){
            CartService.addPhone( phone );
        };

        $scope.contentLoaded = false;

        $scope.includeTemplate = function (){

            return $scope.contentLoaded ? 'templates/scripts.html' : '';

        };

        PhoneService.getSinglePhone(`phones/${id}.json`)
            .then(
                phone => {

                    $scope.phone = phone;
                    $scope.thumbnail = phone.images[0];
                    $scope.contentLoaded = true;
                    $scope.$apply();

                }// phone
            )// then
            .catch( error => {
                console.log('error' , error);
            } );//catch

        $scope.setThumbnail = this._setThumbnail.bind( this, $scope );

    }

    _setThumbnail($scope , photo ){

        $scope.thumbnail = photo;

    }//_setThumbnail

}
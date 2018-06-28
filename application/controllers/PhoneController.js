"use strict";

export  default class PhoneController{

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
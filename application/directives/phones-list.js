"use strict";


export default function PhonesList(){

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
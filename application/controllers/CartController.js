"use strict";

export default class CartController{

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
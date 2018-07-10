"use strict";


export default function CartDirective(){

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
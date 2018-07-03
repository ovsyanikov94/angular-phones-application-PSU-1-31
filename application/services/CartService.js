"use strict";


export default class CartService{

    constructor( $cookies ){

       if($cookies.get('cart')){
           this.cart = JSON.parse($cookies.get('cart'))
       }//if
       else{
           this.cart = [];
       }//else

       this.$cookies = $cookies;

    }//constructor

    getCart(){
        return this.cart;
    }

    addPhone( phone ){

        let exists = this.cart.some( p => {
            return p.id === phone.id;
        } );

        if(!exists){
            this.cart.push( this._getSimplePhone( phone ) );
        }//if
        else{

            for ( let i = 0 ; i < this.cart.length ;  i++ ){

                let p = this.cart[i];

                if(p.id === phone.id){

                    p.amount++;

                    break;

                }//if

            }//for i

        }//else

        this.$cookies.put( 'cart' , JSON.stringify(this.cart) );

    }

    _getSimplePhone( phone ){

        return {
            'id' : phone.id,
            'amount' : phone.amount || 1,
            'name' : phone.name,
        };

    }

    removePhone( index ){

        this.cart.splice( index , 1 );
        this.$cookies.put( 'cart' , JSON.stringify(this.cart) );

    }

}

"use strict";


export default class CartService{

    constructor( localStorageService , PhoneService ){

       if(localStorageService.get('cart')){
           this.cart = localStorageService.get('cart');
       }//if
       else{
           this.cart = [];
       }//else

       this.localStorageService = localStorageService;
       this._phoneService = PhoneService;

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

        this.localStorageService.set( 'cart' , this.cart );

    }

    _getSimplePhone( phone ){

        return {
            'id' : phone.id,
            'amount' : phone.amount || 1,
            'name' : phone.name,
        };

    }

    clearCart(){

        this.localStorageService.clearAll();
        this.cart.length = 0;

    }

    OnItemRemove ( callback ){
        this._removeCallback = callback;
    }

    removePhone( index ){

        this.cart.splice( index , 1 );

        if( this._removeCallback ){
            this._removeCallback(index);
        }//if

        this.localStorageService.set( 'cart' , this.cart );

    }//removePhone

    async getFullPhones () {

        let phones = [];

        for ( let i = 0 ; i < this.cart.length ; i++  ){

            let cartPhone = this.cart[i];
            let phone = await this._phoneService.getSinglePhone( `phones/${cartPhone.id}.json` );
            phone.amount = cartPhone.amount;

            phones.push( phone );

        }//for i

        return phones;

    }

}

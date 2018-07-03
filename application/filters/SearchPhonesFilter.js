"use strict";

export default function SearchPhonesFilter(){

    return function ( phones , searchString , ageLow , ageHight ){

        return phones.filter(
                p =>
                    p.name.toLowerCase()
                          .indexOf( searchString.toLowerCase() ) !== -1
                    &&
                    p.age >= ageLow && p.age <= ageHight
        );

    }// fd

}//SearchPhonesFilter

'use strict';

module.exports = new TypeProto();

function TypeProto() {
    /**
     * get type of variable
     *
     * @param variable
     */
    function type(variable) {
        const regExp = /\s([a-zA-Z]+)/;
        const str = {}.toString.call(variable);
        const typeBig = str.match(regExp)[1];
        const result = typeBig.toLowerCase();
        
        return result;
    }
    
    /**
     * functions check is variable is type of name
     *
     * @param variable
     */
    function typeOf(name, variable) {
        return type(variable) === name;
    }
    
    function typeOfSimple(name, variable) {
        return typeof variable === name;
    }
    
    ['null', 'arrayBuffer', 'file', 'array', 'object']
        .forEach((name) => {
            type[name] = typeOf.bind(null, name);
        });
    
    ['string', 'undefined', 'boolean', 'number', 'function']
        .forEach((name) => {
            type[name] = typeOfSimple.bind(null, name);
        });
    
    return type;
}


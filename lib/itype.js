'use strict';

module.exports = type;

for (const name of ['null', 'arrayBuffer', 'file', 'array', 'object']) {
    type[name] = typeOf.bind(null, name);
}

for (const name of ['string', 'undefined', 'boolean', 'number', 'function']) {
    type[name] = typeOfSimple.bind(null, name);
}

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


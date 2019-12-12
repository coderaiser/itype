(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.itype = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"itype":[function(require,module,exports){
'use strict';

module.exports = new TypeProto();

function TypeProto() {
    /**
     * get type of variable
     *
     * @param variable
     */
    function type(variable) {
        var regExp = /\s([a-zA-Z]+)/;
        var str = {}.toString.call(variable);
        var typeBig = str.match(regExp)[1];
        var result = typeBig.toLowerCase();
        
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
        .forEach(function (name) {
            type[name] = typeOf.bind(null, name);
        });
    
    ['string', 'undefined', 'boolean', 'number', 'function']
        .forEach(function (name) {
            type[name] = typeOfSimple.bind(null, name);
        });
    
    return type;
}


},{}]},{},["itype"])("itype")
});

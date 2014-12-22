(function(global) {
    'use strict';
    
    var type = new TypeProto();
    
    if (typeof module !== undefined && module.exports)
        module.exports = type;
    else
        global.itype = type;
    
    function TypeProto() {
        /**
         * get type of variable
         * 
         * @param variable
         */
        function type(variable) {
            var regExp      = new RegExp('\\s([a-zA-Z]+)'),
                str         = {}.toString.call(variable),
                typeBig     = str.match(regExp)[1],
                result      = typeBig.toLowerCase();
            
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
        
        ['arrayBuffer', 'file', 'array']
            .forEach(function(name) {
                type[name] = typeOf.bind(null, name);
            });
        
        ['string', 'undefined', 'boolean', 'number', 'function', 'object']
            .forEach(function(name) {
                type[name] = typeOfSimple.bind(null, name);
            });
        
        return type;
    }
    
})(this);

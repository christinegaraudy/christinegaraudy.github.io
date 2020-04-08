// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    //if the value passed to Array.isArray built in method returns true
   if (Array.isArray(value)){
       return true; //function returns true
   } else { // if not
       return false; //function returns false
   }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    /*if calling built in toString method on the value input passed to prototype object is equal to 
    the class of object evaluates to true*/
   if (Object.prototype.toString.call(value) === '[object Object]') {
       return true; //return true
   } else { //if it does not
       return false; //return false
   }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    /*if calling toString method on the value input passed to prototype object is equal to object type evaluates to true,
    OR built in method Array.isArray returns true when passed input value*/
    if (Object.prototype.toString.call(value) === '[object Object]' || Array.isArray(value)) {
        return true; //return true
    } else { //if it does not
        return false; //return false
    }
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
//if the value is an array datatype, return "array"
    if (value instanceof Array) {
        return "array";
//if the value is a string  datatype, return "string"
    } else if (typeof value === "string") {
        return "string";
//if the value is a date datatype, return "date"
    } else if (value instanceof Date) {
        return "date";
//if the value is undefined, return "undefined"
    } else if (typeof value === "undefined") {
        return "undefined";
//if the value is a number datatype, return "number"
    } else if (typeof value === "number") {
        return "number";
//if the value is a Boolean datatype, return "boolean"
    } else if (typeof value === "boolean") {
        return "boolean";
//if the value is null, return "null"
    } else if (value == null) {
        return "null";
//if the value is a function, return "function"
    } else if (typeof value === "function") {
        return "function";
//if the value is an object, return "object"
    } else if (value instanceof Object) {
        return "object";
    }
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}

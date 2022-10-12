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
   if(Array.isArray(value)){
    return true;
   }else{
    return false;
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
    if(typeof value === "object" && Array.isArray(value) === false && value !== null && !(value instanceof Date)){
       console.log('true');
        return true;
       }else{
        console.log('false');
        return false;
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
    
    if(typeof value === "object" && Array.isArray(value) === false && value !== null && !(value instanceof Date)){
        console.log('true');
         return true;
        }else if(typeof value === "object" && Array.isArray(value) === true && value !== null && !(value instanceof Date)){
        console.log('true');
        return true;
        }else{
         console.log('false');
         return false;
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

    //check if the given value is an object
    if(typeof value === "object" && Array.isArray(value) === false && value !== null && !(value instanceof Date)){
        //return a string that says "object"
        return "object";
        //check if the given value is an array
    }else if(typeof value === "object" && Array.isArray(value) === true && value !== null && !(value instanceof Date)){
        //return a string that says "array"
        return "array";
        //check if the given value is null
    }else if(typeof value === "object" && Array.isArray(value) === false && value === null && !(value instanceof Date)){
        //return a string that says "null"
        return "null";
        //check if the given value is an date
    }else if(typeof value === "object" && Array.isArray(value) === false && value !== null && value instanceof Date){
        //return a string that says "date"
        return "date";
        //check if the given value is an string
    }else if(typeof value === "string"){
        //return a string that says "string"
        return "string";
        //check if the given value is an boolean
    }else if(typeof value === "boolean"){
        //return a string that says "boolean"
        return "boolean";
        //check if the given value is an number
    }else if(typeof value === "number"){
        //return a string that says "number"
        return "number";
        //check if the given value is an function
    }else if(typeof value === "function"){
        //return a string that says "function"
        return "function";
        //check if the given value is undefind
    }else if(typeof value === "undefined"){
        //return a string that says "undefind"
        return "undefined";
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

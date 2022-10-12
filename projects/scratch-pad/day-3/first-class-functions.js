// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
  
    //retutn the result of function that take a paramter of t
    return function(t){
        //check if the given paramter of t is greater than paramter of base
        if(t > base){
            //return true
            return true;
            //run if false
        }else{
            //return false
            return false;
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //

    //retutn the result of function that take a paramter of t
    return function(t){
          //check if the given paramter of t is greater than paramter of base
        if(t < base){
            //return true
            return true;
            //run if false
        }else{
            //return false
            return false;
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
      //retutn the result of function that take a paramter of sn
  return function(sn){
    //check if the frist lette from the given paramter sn that lowercase is equal to the given paramter startsWith that lowercase
    if(sn[0].toLowerCase() == startsWith.toLowerCase()){
        //return true
        return true;
        //run if false
    }else{
        // return false
        return false;
    }
  }  
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    //retutn the result of function that take a paramter of sn
    return function(sn){
        //check if the last lette from the given paramter sn that lowercase is equal to the given paramter startsWith that lowercase
        if(sn[sn.length - 1].toLowerCase() == endsWith.toLowerCase()){
            //return true
            return true;
            //run if false
        }else{
            //return false
            return false;
        }
      }  
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //

    //creat a empty array
   var narr = []; 
   //loop through the given string length
    for(let i = 0; i < strings.length; i++){
        //push the curent modify string in to narr
     narr.push(modify(strings[i]));
    }
    //return narr
    return narr;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //

    //creat a variable that holds the value of false and a varaible that hold a value of 0
 var istrue = false;
 var count = 0;
 //loop through the string length
    for(let i = 0; i < strings.length; i++){
        //check if the test function return true
        if(test(strings[i])){
            //increase the value of count by one
           count++; 
        }
    }
    //check if the value of cout is equal to the string length
if(count === strings.length){
    //set istrue to true
    istrue = true;
}
//return is true
   return istrue; 
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}

// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //

  //loop through the given array
  for(let i = 0; i <= array.length; i++){
    //print to the console the curent value of the given array
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //

  //loop through the given array backwords
  for(let i = array.length -1; i >= 0; i--){
     //print to the console the curent value of the given array
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //

  //creat an empty array
  var arr =[];
  //loop though the given object
  for(let key in object){
    //push the curent key in object into to arr
    arr.push(key);
  }
  // return arr
  return arr;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //loop through the given object
  for(let key in object){
    //print to the console the curent key in the given object
    console.log(key);
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //

  // creat an empty array
  var arr =[];
  //loop through the given object
  for(let key in object){
    //push the curent key value in the given object into arr
    arr.push(object[key]);
  }
  //return arr
  return arr;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //

  //loop through the given object
  for(let key in object){
     //print to the console the curent key value in the given object
    console.log(object[key]);
  }
 
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //

  //creat a variable that hold a value of zero
  var count = 0;
  //loop through the given object
  for(let key in object){
    //increase the count value by one for each key in the given object
    count++;
  }
  //return count
  return count;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //

  //creat a empty array
  var arr =[];
  //loop throught the given object
  for(let key in object){
    //push the curent key value in the given object into arr
    arr.push(object[key]);
  }
  //loop through all values in arr backwords
 for(let i = arr.length - 1; i >= 0; i--){
  //print to the console the curen value in arr
console.log(arr[i]);
 }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}

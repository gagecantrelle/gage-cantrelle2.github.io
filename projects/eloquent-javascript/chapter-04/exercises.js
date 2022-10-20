////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, int) {
  //create an empty array
  var arr = [];
  //check if start and end are equal to each other
  if(start === end){
    //return arr
    return arr;
  }
  //check if int has a value
  if(int !== undefined){
    //check if int is negative
    if(int < 0){
      //return arr
      return arr;
    }
    //loop from start to end and increase i by int
  for(let i = start; i <= end; i += int){
      //push the curent value of i into arr
      arr.push(i);
   }
   //run if int is not defined
 }else{
  //loop from start to end
   for(let i = start; i <= end; i++){
    //push the curent value of i into arr
     arr.push(i);
 }
 }
 //return arr
return arr;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
  //create a variable that will hold the total of all numbers in the given array
  var total = 0;
  //loop through given array
  for(let i = 0; i < arr.length; i++){
    //add the curent value into total
    total += arr[i]; 
  }
  //return total
return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
  //create a variable that will hold the given array in reverse
  var reverse = [];
//loop through the given array backword
for(let i = arr.length -1; i >= 0; i--){
 //puss the curent value in to reverse 
  reverse.push(arr[i]);
}
//return the reverse array
return reverse;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
//return the given array but reverse
return arr.reverse();
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  //create a rest varaible that is equal to null
  var rest = null;
  //loop through the given array length
  for(let i = array.length -1; i >= 0; i--){
    //set rest to equal a object that has a key of value that equal i and a key of rest that equal rest
    rest = {value: array[i], rest: rest};
  }
  //return rest
return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//list is a object
function listToArray(list, arr=[]) {
  //check if the given list key value of rest is equal to null
if(list.rest === null){
  //push the given list key value of value into arr
  arr.push(list.value);
  //return arr
  return arr;
}
//push the list key value of value into arr
arr.push(list.value);
//get rid of the list key of value
delete list.value;
//return the function that has the  list paramter now equlaing the key of rest and not making any changes to arr
return listToArray(list.rest, arr);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, obj) {
  //create an varaible that will hold the give object as a array
  var arr = listToArray(obj);
  //add the given value to arr
  arr.unshift(value);
  //return arr as an object
  return arrayToList(arr);
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(obj, value) {
  //create a variable that holds the given object as an array
  var arr = listToArray(obj);
  //check if given targeted index has a value
  if(arr[value] !== undefined){
    //return the curent value in index
    return arr[value];
    //check if the given value is negative
  }else if(value < 0){
    //return undefined
    return undefined;
    //run if both check are false
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
// determine if x + y
if (typeof x !== 'object' && typeof y !== 'object'){
  return x === y;
}
  if (typeof x !== 'object' || typeof y !== 'object'){
    return false
  }
// we know we are dealing with complex datatypes
// create array of keys
let xKeys = Object.keys(x);
let yKeys = Object.keys(y);
//check for length
if (xKeys.length !== yKeys.length){
  return false;
}
// iterate through x keys array;
for (let i = 0; i < xKeys.length; i++){
  if(!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){
    return false;
}
}
return true;
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};

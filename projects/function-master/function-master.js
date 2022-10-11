//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //creat an emepty array
    var arr = [];
    //loop through the kep values in the object
    for(let key in object){
        //push the current key value into a new array
      arr.push(object[key]);
    }
    //pritn to the console arr
    console.log(arr);
    // return a array contaning all of a object key values
    return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //creat a varable that holds a emepty string and a varable that hold a value of zero
    var str = "";
    var count = 0;
    //loop through all keys in an object
    for(let key in object){
        //check if count is not equal to 3
      if(count !== 3){
        //give str the key name and a space
        str += key + " ";
        //run if count is equal to 3
      }else{
        //give str the key name
        str += key;
      }
      //increas count value by 1
      count++;
    }
    //print to the console the curent str
    console.log(str);
    //return str
    return str;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //creat empty array
    var arr = [];
    //loop throgh the given object
    for(let key in object){
        //check if the object key value is a string
        if(typeof object[key] === 'string'){
            //push the curent key value into an array
        arr.push(object[key]);
    }
}// return a single string combine with all of the key values in arr
    return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //check if the given collection is an array or object
    if(Array.isArray(collection)){
        //return if a string array if collection is an array
        return "array";
        //run ic collection is not an array
    }else{
         //return if a string object if collection is an object
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //return the given string but the frist letter captlize
    return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //creat an array of worrds from a single string and a empty array
    var sp = string.split(' ');
    var arr = [];
    //loop thtough sp
for(let i = 0; i < sp.length; i++){
    //change the curent string to frist letter to uppercase
    arr.push(sp[i][0].toUpperCase() + sp[i].slice(1));
}
//return arr valuse as one string
return arr.join(' ');
}
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //creat a varaible that take a key value name from an object and chagne it to the same word but the frist letter is captlise
var capname = object.name[0].toUpperCase() + object.name.slice(1);
//return a string that say "welcome (capname)!"
return "Welcome " + capname + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //creat a varaible that take a key value name from an object and chagne it to the same word but the frist letter is captlise
    var capname = object.name[0].toUpperCase() + object.name.slice(1);
    //creat a varaible that take a key value species from an object and chagne it to the same word but the frist letter is captlise
    var capspecies = object.species[0].toUpperCase() + object.species.slice(1);
    //return a string that say "(capname) is a (capspecies)"
    return capname + " is a " + capspecies;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //creat a varabile that hold the given object key value 
var obj = object.noises;
//check if the given object has a key value of noises
if(obj === undefined){
    //return a string saying that noisies have no value
    return "there are no noises";
}
//check if the given object nosies has a length greater then 0
if(object.noises.length > 0){
    //creat a varaible that combine all the key values of noises in to a single string
    var arr = object.noises.join(' ');
    //return a single string
    return arr;
    //check if nosies have a length equal to 0
}else if(object.noises.length === 0){
     //return a string saying that noisies have no value
    return "there are no noises";
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //return true or fasle if the given string has the targed word
return string.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //add the given name to the given object key of friendes array
    object.friends.push(name);
    //log the given object friends array
    console.log(object.friends);
    //return the given object
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //creact a varaible that holds a false value and a variable that hold the given object friends key value
var istrue = false;
var arr = object.friends;
//check if arr is undefind
if(arr === undefined){
    //return istrue
    return istrue;
}
//loop through arr
for(let i = 0; i < arr.length; i++){
    //check the curent value in arr is equal to the targeted name
    if(arr[i] === name){
        //set is true to true
        istrue = true;
    }
}
//return istrue 
return istrue;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // creat a empty array
var arr = [];
//loop through the given array
for(let i = 0; i < array.length; i++){
    //check if array includes name
if(array[i].friends.includes(name)){
    // fun if false
}else{
    //if name name in array is not equal to given name
    if(!(array[i].name === name)){
        //push curent array name in new array
        arr.push(array[i].name);
    }
    
}
}
//print to the console new array test
console.log(arr, "ggggggggggg");
// return new array
return arr;
}



//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
 //creat a vvariable that is equal to the given object   
var obj = object;
//update the created object with the given key and value, by changing the value or adding a new value
obj[key] = value;
//return the updated object 
return obj;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //loop through the given object
for(let key in object){
    //loop through the curent value in the given object
    for(let i = 0; i < array.length; i++){
        //check if the curent value in the array is equal to the curent key
        if(array[i] === key){
            //deleat the curent key
           delete object[key];
        }
    }
}
//print to the console the given object
console.log(object);
//return the given object
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //creat a variable that is an empty array and a variable that equal to undefind
var arr = [];
var cur = undefined;
//loop through array
for(let i = 0; i < array.length; i++){
    //check if the curent value in the array is not equal to cur
if(array[i] !== cur){
    //check if arr has a calue equal to the array curent value
   if(!(arr.includes(array[i]))){
    //add the curent value in the array to arr
    arr.push(array[i]);
    //set cur to equal to the curetn value in the array
    cur = array[i];
   }
}
}
//return arr
return arr;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
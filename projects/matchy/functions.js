/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creat a function that take in two pramters
function search(animal, name){
    //loop through the animal parmters
     for(let i = 0; i < animal.length; i++ ){
        //check if the curent value name key from the given animal paramtes is equal to the given name pramter
        if(animal[i].name === name){
            // return the curent value in the given animal paramter
            return animal[i];
        }
    }
    //return null
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creaft a function that take in three paramters
function replace(animals, name, replacement){
    //loop through the given animals pramters
    for(let i = 0; i < animals.length; i++ ){
        //check if the curent value  name in the given animals paramter is equal to the given name paramter 
        if(animals[i].name === name){
            //set the curent value in the given animals paramter to the given replacement paramter 
            animals[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creat a function that take in two paramters
function remove(animal, name){
    //loop through the animal paramter
    for(let i = 0; i < animal.length; i++ ){
        //check if the curent value name in the given animal parmater is equal to the given paramter name
       if(animal[i].name === name){
        //remove the value in the aniaml array
           animal.splice(0, 1);
       }
   }
}



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creat a function that take in two paramters
function add(animals, animal){
    //creat a varaible and set it to false
    var istrue = false;
    //loop through the given animals paramter
    for(let i = 0; i < animals.length; i++ ){
        //check if the value name in the given animals paramter is equal to the given animal paramter name
       if(animals[i].name === animal.name){
        //set iftrue to true
         istrue = true;  
       }
   }// check if istrue is not equal to true
   if(istrue !== true){
    //check if the given animal paramter name and species value length are greater than 0
    if(animal.name.length > 0 && animal.species.length > 0){
        //push the given animal pramter into the given animals pramter
       animals.push(animal);
    }
   }
 
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}

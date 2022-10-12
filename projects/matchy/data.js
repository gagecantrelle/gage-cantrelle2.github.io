/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creat a empty animal object
var animal = {};
//give the animal object a specise, noises, and name key useing . and [] notation
animal.species = "dog";
animal['name'] = "bob";
animal.noises = [];
//print to the console the animal object
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creat a variable calle noises and set it t equal an empty array
var noises = [];
//add 4 string to the noises array useing .push, .unshif, and other methods
noises[0] = 'bark';
noises.push('arff');
noises.push('gerr');
noises.unshift('fart');
//print to the console the noises length, it last value, and the array
console.log(noises.length);
console.log(noises.length - 1);
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//set the nosies key in animal to equal the nosies array
animal['noises'] = noises;
//push the string into the nosies array in the animal object
animal.noises.push('get bone');



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creat an empty array
var animals = [];
//push the animal object into the animals array
animals.push(animal);
//creat 3 object with a species key with a string value, name key with a string value, and a nosies key with a array 
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
var cat = { species: 'cat', name: 'noldes', noises: ['mearo', 'hiss', 'sneeze', 'perr'] };
var bird = { species: 'bird', name: 'sandy', noises: ['titte', 'honk', 'sneeze', 'humm'] };
//add the three object in to the animals array
animals.push(duck);
animals.push(cat);
animals.push(bird);
//print to the console the animals array and it length
console.log(animals);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I chose array
//because it can hold mutiple values/datatypes
//create an empty array
var friends = [];
//creat a function that return a random number
function getRandom(ani){
  //return a random number from o to the paramter length
  return Math.floor(Math.random() * ani.length);
}
//call the function useing the animals array
getRandom(animals);
//set the variabel to equal a random number 
var num = getRandom(animals);
//push the randome animal from the animals array into the friends array
friends.push(animals[num].name);
//print to the console the friends array
console.log(friends);
//loop through the animals array
for(let i = 0; i < animals.length; i++){
  //give the curent object in the animals array a key calle friends and set it to equal the friends array
  animals[i].friends = friends;
}
//print to the console the animals array
console.log(animals);
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
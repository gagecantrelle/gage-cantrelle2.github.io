// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./gage-cantrelle2.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 * 
 * cd projects/let-s-get-functional
 * 
 * node <filename.js>
 * 
 *  //fliter -> use any function asking you to access only cumstomers who pass a test
 *  //map ->
 */

var maleCount = function(array) {
//implement high order function call
var output = array.filter(function(customers){ //assign output of what fliter function return 
//return true if cumstomer is male
return customers.gender === 'male';
})//[male, male, male]
//return length of output
return output.length;
};

var femaleCount = function(array){
//implement reduce to get number of femlae cumstomes
let female = array.reduce(function(acc, cur){
 // how do we interract with acc and cur object to keep track of the number of femal customers

 // acc = 0 / cur = { name: 'alse' , gender: 'male}

//if curent cumstomer is male, add 1 to acc

if(cur.gender === 'female'){
    acc++; // or += 1
}
return acc; //return 0
}, 0);

//return number
return female;
}

var oldestCustomer = function(array){
//creat a variable that will hold the oldest custmer name
var old;
//create a varaibale that hold the curent age
var cur = array[0].age;
//loop through the array
for(let i = 0; i < array.length; i++){
//check who has the oldest age
    if(array[i].age > cur){
//set the oldes name
old = array[i].name;
//set the curent age
cur = array[i].age;
}
}
//return oldest name
return old;
}

var youngestCustomer = function(array){
//creat a variable that will hold the youngest custmer name
var young;
//create a varaibale that hold the curent age
var cur = array[0].age;
//loop through the array
for(let i = 0; i < array.length; i++){
//check who has the youngest age
    if(array[i].age < cur){
//set the oldes name
young = array[i].name;
//set the curent age
cur = array[i].age;
}
}
//return oldest name
return young;
}

var averageBalance = function(array){ //use parseFloat() to change string to nember /// then use .replace(/[$,]/g, '')
//creat an empty array
var arr = [];
//creat a total varaible
var total;
//creat a blance varaible
var blance;
//loop through the array
for(let i = 0; i < array.length; i++){
//creat a varaible that will hold the curent string
var str = array[i].balance;
//modify the string
str = str.replace(/[$,]/g, '');
//change string to number
str = parseFloat(str);
//add the number verson of str into arr
arr.push(str);
}
//loop through arr
for(let j = 0; j < arr.length; i++){
    //add curent value to total
    total += arr[j];
}
//find the balance in total
blance = total / arr.length;
//return balance
return blance;
}

var firstLetterCount = function(array, letter){
//creat avaraibles that will hold how many have the given frist letter
var count = 0;
//loop through the given array
for(let i = 0; i < array.length; i++){
    //compar the curent frist name letter with the given lette
    if(array[i].name[0].toLowerCase() === letter.toLowerCase()){
        //increase count value by 1
        count++
    }
}
//return the value of count
return count;
}

var friendFirstLetterCount = function(array, customer, letter){
//creat avaraibles that will hold how many have the given frist letter
var count = 0;
//loop through the given array
for(let i = 0; i < array.length; i++){
    //find the given customer
    if(array[i].name === customer){
        //loop through the friends array
        for(let j = 0; j < array[i].friends.length; j++){
            //check if curent friend frist letter is equal to the given letter
            if(array[i].friends[j].name[0].toLowerCase() === letter.toLowerCase()){
                //increase count by one
                count++;
            }
        }
    }
}
//return the value of count
return count;
}

var friendsCount = function(){

}

var topThreeTags = function(){  //.sort, .slice, reduce?

}

var genderCount = function(){

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;

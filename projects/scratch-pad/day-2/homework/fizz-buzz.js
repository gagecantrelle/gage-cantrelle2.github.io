// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    //loop a 100 times
for(let i = 1; i <= 100; i++){
    //check if the curent value of i is divisable by 3 and 5 (15)
    if(i % 3 === 0 && i % 5 === 0){
        //print to the console the string "FizzBuzz"
        console.log("FizzBuzz");
        //check if the curent value of i is divisable by 3
    }else if(i % 3 === 0){
        //print to the console the string "Fizz"
        console.log("Fizz");
        //check if the curent value of i is divisable by 5
    }else if(i % 5 === 0){
        //print to the console the string "FizzBuzz"
        console.log("Buzz");
        //run if all if statement return false
    }else{
        //print to the console the curent value of i
        console.log(i);
    }
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}
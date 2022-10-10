
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  //creat a empty sting and empty array
var str = '';
var arr = [];
//loop how many time by the given number
for(let i = 0; i < num; i++){
  //add # to the string
  str += '#';
  //push the curent string value in to an array
  arr.push(str);
  //print to the console the current array
  console.log(str);
}

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  //loop 15 times 
  for(let i = 1; i <= 15; i++){
    //check if current loop is divisbal by 3 and 5.( check if divibal by 15)
    if(i % 3 === 0 && i % 5 === 0){
      //print to the console fizzbuss
        console.log("fizzbuzz");
        //check if current loop is divisbal by 3
    }else if(i % 3 === 0){
      //print to the console fizz
        console.log("fizz");
        //check if current loop is divisbal by 5
    }else if(i % 5 === 0){
      //print to the console buzz
        console.log("buzz");
        //run if all three if statements return false
    }else{
      //print to the console the curent loop number
        console.log(i);
    }
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
//decalare a chessboard string
var str = '';
// loop how many times by given number
for(let i = 0; i < num; i++){
  //loop for the next line of string
  for(let j = 0; j < num; j++){
  //combine the two loops in puts
    var sum = j + i;
    //sheck if sum is even
    if(sum % 2 === 0){
      // add a space to the chestboard string
      str += ' ';
      //sheck if sum is odd
    }else if(sum % 1 === 0){
      // add a # to the chestboard string
      str += '#';
    }
  }
  // move string to new line after second loop
  str += '\n';
}
// log chestboard to console.
console.log(str);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}

/**
 * Varaibales
 * 
 * 0: Variables are name containers for data/Values in javascript. They can hold diferent types of values like Strings, Numbers, Boolean, Array, Object, and more. 
 * Once when a variable is created it can change it value or value type at any time. 
 * 
 * 1: To create a variable type var, follwode by a name or id
 *   
 * 2: There are two steps for creating a variable
 */

//Step 1. declaraing a name
//After declaraing a name that varaibale will be give a value of undefind, because we didn't give it a value yet.
var test1;
console.log(test1); // prints undefind

//Step 2-1. assign a value
//When you assign a value to a variable is will have one of nine value. string, number, boolean, object, array, function, NaN, null, undefind
var test2 = 'hello';
console.log(test2); // prints hello

//Step 2-2 reassign a varable
//Even after you assign a varable a value you can still chang it value and value type 
test2 = 'world';
console.log(test2); // prints world

test2 = 2;
console.log(test2); // prints 2


//Hosting
//1. Hosting is the proceus of going through all declarated varabiles names declared with var and function declaration are hoisted from top of their scope.
//it will start from top to bottom.
var test3 = 'hi there';
console.log(test3); // prints hi there

//2. If a varable is called befor it's declared it will give set the value to undefind due to test3 being hosted frist befor test3 is given an a value
console.log(test3); // print undefind
var test3 = 'hi there';

//3. It also dosen't work the same for function
//when hoisting a function it will be hoisted to the top of the scope. so, if you call a function befor it's made it will still work properly
function calltest(value){
    console.log(value);
}
calltest(1)
//prints 1

calltest(1)
function calltest(value){
    console.log(value);
}
//prints 1

//variable types
//1. Var is a basic variable types that can hold any value, change it value/value type, and can be use anywhere in your code. The scope of a varaible is
// defindes where the varaible will be able to use.


  /**
   * Scope
   * 
   * 1: Function scope, A varaible declared in a function can only be used in a function
   * 
   * 2: Block-scope, A varaible declared in a pair of Curly brackes can be used but if called it will give a value of undefind
   * 
   * 3: var is a gobal varaible or function scope depending on where it declared in the code, so it can be call any where at any time
   */

   //1
   function test4(){
    var istrue = true;
    console.log(istrue);
   }
   test4(); // print true
   console.log(istrue); // give reference error istrue is not defined

   //2
   if(test5 = false){
    var isfalse = false;
    console.log(isfalse); // print false
   }
   console.log(isfalse); // prints false   

//2. let is a varaible that acts like a block scope. Meaning that it value can be reassign in a the block/Curly brackes and be reassign a value by calling it.
  //1
  let test6 = 6;
  let test6 = 7;   
  console.log(test6); // give redeclaration of let test6(varaible name) error

  //2
  let test7 = 7;
  test7 = 8;
  console.log(test7); //print 8

  //3
  let test8 = 8;
  if(test8 === 8){
    let Test8 = 8;
    console.log(Test8); //print 8
  }
  console.log(Test8); // give reference error test8 is not defined

  //3 conts is a varaible the can't be change at all. even if it's in a block/Curly brackes and functions. 
    //1
    const test9 = 9;
    const test9 = 10;
    console.log(test9); // give invalid assigment to const test9(varaible name) error

    //2
    const test9 = 9;
    test9 = 10;
    console.log(test9); // give invalid assigment to const test9(varaible name) error

    //3
    function change(){
        let test10 = 10;
        test10 = 11;
        console.log(test10); // give invalid assigment to const test10(varaible name) error
    }
    console.log(test10); // give reference error test10 is not defined
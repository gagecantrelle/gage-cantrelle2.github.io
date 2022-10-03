/**
 * Functions
 * 
 * 0: Functions are a type of complex datatype/value that contans a set of codes that wont run until it called.
 *    when called it will run it code despict it allready been run by the program. it can run at any point in your
 *    program when called
 * 
 * 1: in each function it will have a parameters that will take in a varaible out side the function to put it in the
 *    function
 *  
 * 2: code created in the function can't be called out of the function
 */

//ceating the function
//you would put function test1(){} this would be called a function declaration and the test1() is called a function invocation or call.
function test1(){

}
// now if we just type in the function name test1() it will run at any point in you code
test1(); // run code
console.log(test1()); // print nothing to the console
// in the percintes of the function next to it name you can put in a parameter that will be equal to a varaible value
function test2(input){
    var output = input + 1;
    return output;
}
var add = 1;
console.log(test2(add)); // print 2
//the parameters will takin in any value or varaible and copy it. it will then use that value in the function to run the
//code. then if you need to retun a value you will put return output;

//another way way to creat a function is by function expersion. var test = 2 + 2; is a expersion, 2 + 2 is a evaluate it value, and then assign it value (4);
//so, a function expersion will look like this
var t = function(value1, value2){
    
}
//this is also know as a Anonymous function. a function with out a name. the t resperant the function it ont the function name


//when useing a function any code in it can't be use outside the function. By given the function a parameters it will act like a
//blank varaible in the function. To add a varaible or value in the function, you will need to call the function and put a varaible/value
//in side the percintes. This is also know a arugment, the parameter will then be equal to the argument. changing all the named parameters
//in the function to be equal to the argument value

//once a function takes in an argument it has the option to return a value. That value can be the argument we gave the function
// or a varaible created within the function. It could just return a value and not a variable. Even if the function has no 
// parameters it will still run and return a value

function test3(){
    console.log("hi");
}
test3(); // run test3 which will print hi

function test4(){
    var times = 2 * 3; // equal 6
    return times;
}
console.log(test4()); //print 6

// The function scope can edit other varaible outside the function by accessing/ressign variables from a paraent scope. we can also creat a 
//varaible in side the function that will hold a edited value of an gobal varaible. we then can return the varaible created inside the 
//function as a value. Then set the gobal varaible that was given to the function as the return value

var a = 1;
function test5(){
  a += 1;
}
console.log(a); // print 2


//function Closures
//Functions form closure around the code the hold ( {} ). when a function return a value and is stored some where the code in the
//function will sill exist
function t(){

}// closure

//High-order functions
//a function inside a function
//it can take in a function as a argument that can run it stef. if a functio in a function returns a value that value will return in side of the function.
//it can also call it self in side of it own function to create a loop. also, it know a recursion

function test6(array, func){
return func(array);

}
var t6 = function(arr){
    for(let i = 0; i < arr.length; i++){
       console.log(i); 
    }
}

var t = [1, 2, ,3];
test6(t, t6);


// function recursion
// a loop made with a function
//by calling it self in side of it self it creates a loop. it has 2 proertise a base case and a recursion case.
//the base case is were you put your stoping condition at. by saying if(n.length === 0){ return 0}. to stop the loop you need to reutn something else
//the recursion case is where you call the function in it self. by saying return test8(n.slice(1), count)
function test7(n, count=0){
    if(n.length === 0){
        return count;    // return how many items in array
    }
count++;
return test7(n.slice(1), count);  // will loop
}
var t7 = ['a', 'b', 'c' ];
console.log(test8(t7)); // prints 3

//by return the same function in it self we created a loop. to stop this loop we created an if statement to check if n length is equal to
//zero. then when we return the function we take of a value in the array. when n length is zero we return the varibale count that was created
//in the paramters. by make count in the praramters it dosen't get reset. but if we return the function we have to put count in the function too.

function test7(n){
    if(n.length === 0){
        return count;    // return how many items in array
    }
var count = 0;  
count++;
return test7(n.slice(1), count);  // will loop
}
var t7 = ['a', 'b', 'c' ];
console.log(test8(t7)); // prints 1

// by declaring count in the function loop count will all way be reset to zero
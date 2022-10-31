/**
 * types of data/values
 * 1: Number = 0, 1, 2, 3, and -1
 * 2: String = "hello world" or 'hello world'
 * 3: Boolean = true or false
 * 4: Array = [1, 'hello', true]
 * 5: Object ={
 * name: gg;
 * age: 4;
 * istrue: true;
 * }
 * 6: Function = function varname(oo){
 * return oo;
 * }
 * 7: Undefined = undefind/ no value
 * 8: Null = set something to undefind 
 * 9: NaN = not a number
 */
 
  //1
  var num1 = 1;
  var num2 = 0;
  var num3 = -1;
  // can hold any number
  
  //2
  var scentes1 = "hello there world";
  var scentes2 = 'hello';
  var scentes3 = 'h';
  // can hold a secesntes, a single word, or a single character

  //3
  var istrue = true;
  var isfalse = false;
  // can hold values of true or false
  var bol;
  if(1 < 10){ //compare if 1 is less than 10
  //if true
  bol = true;
  }else{
  //if false
  bol = false;
  }

  //4
  var arr = [1, 'hey', false, {
  name: bob, 
  age: 23,
  }];
  // can hold mutiple values in a single varaible

  //5
  var obj = {
name: joe,
age: 2,
like: ["apple", "car"],
  }
  // can hold key collection
  //each collection can hold mutiple different values
  //each key is given a name

  //6
  function test(up){
    return up;
  }
  console.log(test(1)); //print 1
  // can hold a set of code that can perform an action when called. The parameter of each function can be givein a name(up). when called(test(1)) you can
  //give the parameter a value or varaible(num1).

  //7
  var undefind;
  // a value that appear when a varaible has no data/value

  //8
  var i = null;
  // same as undefined, but use when you want to set a varaible value to nothing

  //9
  var times = 2 * 'a';
  console.log(times);
  //a value that appers when a output is expextion a number, but is given a differnt value insted

//copy by value / reference
//when assigning a varaible a value from another it is copy by value or reference

var a = 'a';
var A = a; // A is copying by value
//when copy by value it will have no contactions to the orginal varaible

var b = ['b'];
var B = b; //copying by refence
//when copy by refence it will have a contactions to the orginal varaible, allowing the orginal varaible to be change
B[0] = 'B';
console.log(b)// print B
//since an array is complex datatype it can hold mutiple lines of value, mutiple values, or both
// the same as an object.
var c = { str: 'c' };
var C = c;
C.str = 'C';
console.log(c.str); // print C

/**
* infint numbers
* 
* 0: Infinty and -infinty are specal numbers that don't end. They apper when you crated in infite loop 
* 
* 1: you would see Infinty when you get an error say that the code is infint
* 
* 2; you would see -Infinty when you get an error say that the code is -infint
*/

var inftest1 = typeof Infinity;
var inftest2 = typeof -Infinity;
console.log(inftest1); //print number
console.log(inftest2); //print number


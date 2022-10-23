/**
 * Control Flow
 * 
 * 0: Control Flow are a set of statements that tell a program what it can and can't do. This alow the program know when a certan
 * condition is meet and run a spefic set code depend on the condition.
 * 
 * 1: If the statement that is testing a value to see if it the value it looking for it will run the spefics set of code that is in it.
 * allowing the code to run when the statemnt find a spefice value it looking for. 
 */

//If, Else-if, Else statemets
// Statements that specify a line of of code to run if the Statement condition is true

  //If and Else statement
  var test1 = 1;
  if(test1 === 1){         //test if test1 that has a value of 1 is equal to 1
    console.log(test1); //print 1 if statement is true
  }else{    //will run if statement is false
    console.log("error"); // print error 
  }

  //Else-if statement
  var test2 = 2;
  if(test2 === 2){         //test if test2 that has a value of 2 is equal to 2
    console.log(test2); //print 1 if statement is true
  }else if(test2 === 1){ //if the frist if statement return false then this if statement will run, testing if test2 is equal to 1 
    console.log(test2) //print 2 if statement is true
  }else{   // will run if all If statements are false
    console.log("error"); // print error 
  }
  //Else-if will run if the frist if statement come back as false, then check if the value is equal to it's condition. this statements can be used mutiple times
  // but, it not helpfull if your testing a value that has too many conditions.

  //If statement can use varaibales for it conditions
  var test3 = 3;
  var test4 = 4;
  if (test3 === test4){  //test if test3 which is 3 is equal to test4 which is equal to 4 
    console.log("true"); //print true if the statement is true
  }else{
   console.log("false"); //print false if the statement is false
  }

//Switch statements
//This statement is simular to If statement. They both compare values that are given to them but, a switch is more cleaner. it is beter susited for
//when you need to compare a value and have mutiple conditions. for example, if your makeing a card game with 50 cards. that has 10 diferent 
// types of cards.(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, king, queen, joker)
var test5 = 5;

switch(test5){
case 1:  //if test5 === 1
    console.log(1);
break;   // stop if conditions are true
case 2:  //if test5 === 2
    console.log(2);
break;   // stop if conditions are true
case 3:  //if test5 === 3
    console.log(3);
break;   // stop if conditions are true
case 4:  //if test5 === 4
    console.log(4);
break;   // stop if conditions are true
case 5:  //if test5 === 5
    console.log(5);
break;
}

// since the switch statemrnt is not useing {} notation, when delare a case it will repersent the tart of the statement. it will look at every line of code under it
// as part of it statement. by declaring break it will let the case statemnt it under to know which lines of code is part of it statement. 
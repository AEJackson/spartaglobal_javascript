//lexical Scope
//Code can see out but can see in
// var outsideVariable = 5; // global scope
//
// function doSomething() {
//   console.log(outsideVariable);
// }
//
// doSomething();

// function doSomething() {
//   var insideVariable = 5; // local scope
// }
// doSomething();
// console.log(insideVariable);

// function firstFunction() { // global scope
//   console.log("Im in the firstFunction");
// }
//
// function secondFunction() { // global scope
//   firstFunction();
//   console.log("Im in the secondFunction");
// }
//
// secondFunction();

//nested functions
// function joinStringAndPrint(string1, string2) {
//   var newString = string1 + string2;
//
//   function printString(string) { // can't call it string1 since already in use
//     console.log(string);
//
//     //q3 - this will run
//     console.log(newString);
//
//     //q4 - this will run
//     console.log(string1 +string2);
//
//     return string;
//   }
//
//   return printString(newString);
// }
//
// var string1 = "hello, ";
// var string2 = "world";
// var result = joinStringAndPrint(string1, string2);
// console.log(result);
//
// //q1 - will not run
// printString("run from outside");
//
// //q2 - will not run
// console.log(newString);

// // Passing functions as variables
// function sayHello() {
//   console.log("hello");
// }
//
// function functionCaller(functionToRun) {
//   functionToRun();
// }
//
// functionCaller(sayHello);

// //declare
// function onTimerComplete() {
//   console.log("timer finished");
// }
//
// setTimeout(onTimerComplete, 300);


// // counter
// function createCounter() {
//   var total = 0;
//
//   return function functionName() {
//     total++;
//     return total;
//   }
// }
//
// var counter = createCounter();
//
// counter();
// counter();
// counter();
//
// var total = counter();
// console.log(total);

// for (var i = 0; i < 10; i++) { //loop runs too quick so i=10 always
//   setTimeout(function() {
//     console.log(i);
//   }, (i*1000));
// }

for (var i = 0; i < 10; i++) {
  setTimeout((function(j) {
    console.log(j);
  })(i), (i*1000));
}

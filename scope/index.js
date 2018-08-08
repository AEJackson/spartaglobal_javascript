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
function joinStringAndPrint(string1, string2) {
  var newString = string1 + string2;

  function printString(string) { // can't call it string1 since already in use
    console.log(string);
    return string;
  }

  return printString(newString);
}

var string1 = "hello, ";
var string2 = "world";
var result = joinStringAndPrint(string1, string2);
console.log(result);

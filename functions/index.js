// // Writing basic Functions
// var result = 5 + 10;
// var result2 = 1 +2;
//
// console.log(result);
//
// // Declaring the Function
// // This is a named function
// function addNumbers() {
//   var function_result = 5 + 10;
//   console.log(function_result);
// }
//
// // Unnamed function
// var addNumbers2 = function() {
//   var function_result2 = 5 + 10;
//   console.log(function_result2);
// }
//
// // Calling named function
// addNumbers();
//
// // Calling function by variable name
// addNumbers2();

// hoisting
// this works because JS goes through the code and moves all functions to the top
// so even though makeNoise() is called before the definitioned in your code.
//really the definition is moved to the top in JS
// makeNoise();
// function makeNoise() {
//   alert("how annoying - we will never use these in our games");
// }


// function addNumbersTogether(number1, number2) {
//   var result = number1 + number2;
//   console.log(result);
// }
//
// addNumbersTogether(1,5);
// addNumbersTogether(10,5);

function addNumbersWithReturn(number1, number2) {
  var result = number1 + number2;
  return result;
}

var answer1 = addNumbersWithReturn(1,3);

debugger;

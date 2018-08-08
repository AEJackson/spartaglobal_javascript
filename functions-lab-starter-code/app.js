// 1. Write a function called 'multiply' that multiplies two numbers and returns the result
function multiply (number1, number2) {
  var result = number1 * number2

  return result;
}

// 2. Write a function called 'addThree' that adds three numbers together and returns the result
function addThree(number1, number2, number3) {
  var result = number1 + number2 + number3;

  return result;
}

// 3. Write a function called 'smallestNumber' that returns the smaller of 2 numbers
function smallestNumber(number1, number2) {
  // var result = number1;
  // if( number2 < number1 ) {
  //   result = number2;
  // }
  var result = Math.min(number1,number2);
  return result
}

// 4. Write a function called 'maxOfThree' that returns the largest of 3 numbers
function maxOfThree(number1, number2, number3) {
  // var result = number1;
  // if( number2 > result) {
  //   result = number2;
  // }
  // if(number3 > result){
  //   result = number3;
  // }
  var result = Math.max(number1, number2, number3);
  return result;
}

// 5. Write a function called 'reverseString' that returns the reverse a string
function reverseString(theString) {
  // var tmpArray = theString.split("");
  // var result = tmpArray.reverse();
  //
  // result = result.join("");
  result = theString.split("").reverse().join("");

  return result;
}

// 6. Write a function called 'disemvowel' that returns the vowels from the string parameter
function disemvowel(theString) {
  // var array = ["a","e","i","o","u"];
  // var vowelArray = [];
  //
  // for (var i=0; i < array.length; i++) {
  //   for (var j =0; j < string.length; j++){
  //     if( theString[j] == array[i]){
  //       vowelArray.unshift(string[j])
  //     }
  //   }
  // }

  return  theString.replace( /[aeiou]/gi,"");
}

function disemvowel2(theString) {
  var result = "";

  debugger;

  var character = "a";
  while (theString.search(character) >= 0){
    result = theString.substr( theString.search(character),character.length )
    theString = theString.substr(0,theString.search(character)) +
                theString.substr(theString.search(character)+1, theString.length-1);
  }
  character = "e";
  while (theString.search(character) >= 0){
    result = theString.substr( theString.search(character),character.length )
    theString = theString.substr(0,theString.search(character)) +
                theString.substr(theString.search(character)+1, theString.length-1);
  }
  character = "i";
  while (theString.search(character) >= 0){
    result = theString.substr( theString.search(character),character.length )
    theString = theString.substr(0,theString.search(character)) +
                theString.substr(theString.search(character)+1, theString.length-1);
  }
  character = "o";
  while (theString.search(character) >= 0){
    result = theString.substr( theString.search(character),character.length )
    theString = theString.substr(0,theString.search(character)) +
                theString.substr(theString.search(character)+1, theString.length-1);
  }
  character = "u";
  while (theString.search(character) >= 0){
    result = theString.substr( theString.search(character),character.length )
    theString = theString.substr(0,theString.search(character)) +
                theString.substr(theString.search(character)+1, theString.length-1);
  }
  // result = result + extractCharacter("a");
  // result = result + extractCharacter("e");
  // result = result + extractCharacter("i");
  // result = result + extractCharacter("o");
  // result = result + extractCharacter("u");

  return result;
}

// function extractCharacter(character) {
//   var result;
//   while (theString.search(character) > 0){
//     result = theString.substr( theString.search(character),character.length )
//   }
//
//   return result;
// }

// 7. Write a function called 'removeOdd' that removes all ODD number from an array
function removeOdd(array) {
  for ( var i = 0; i < array.length; i++) {
    while (array[i] % 2) {
      array.splice(i,1);
    }
  }

  return array;
}
// 8. Write a function called 'removeEven' that removes all EVEN number from an array
function removeEven(array) {
  for (var i = 0; i < array.length; i++) {
    while (array[i] % 2 == 0) {
      array.splice(i--,1);
    }
  }

  return array;
}

// 9. Write a function called 'longestString' that takes an array of strings and returns the string with the longest character length
function longestString(array) {
  var longest = "";
  for (var i = 0; i < array.length; i++) {
    if( array[i].length > longest.length) {
      longest = array[i];
    }
  }

  return longest;
}

// 10. Write a function called 'allElementsExceptFirstThree' that discards the first 3 elements of an array,
// e.g. [1, 2, 3, 4, 5, 6] becomes [4, 5, 6]
function allElementsExceptFirstThree(array) {
  // array = array.reverse();
  // for (var i = 0; i < 3; i++) {
  //   array.pop();
  // }
  //
  // return array.reverse();

  array.splice(0,3);
  return array;
}
//#### BONUS ####

// 11. Write a function called 'convertArrayToAnObject' that turns an array (with an even number of elements) into a hash, by
// pairing up elements. e.g. ['a', 'b', 'c', 'd'] becomes
// {'a' => 'b', 'c' => 'd'}
function convertArrayToAnObject(array) {
  var temp = {};
  if ((array.length % 2) == 0) {
    for (var i = 0; i < array.length; i+=2) {
      temp[array[i]] = array[i+1];
    }
  }

  return temp;
}

// 12. Write a function called 'fizzBuzz' that takes any number and returns a value based on these rules

// But for multiples of three print "Fizz" instead of the number
// For the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function fizzBuzz(number) {
  var result = number;
  if ((number % 5 ) == 0 && (number % 3) == 0) {
    result = "FizzBuzz";
  }
  else if ((number % 5) == 0) {
    result = "Buzz";
  }
  else if((number % 3) == 0) {
    result = "Fizz";
  }

  return result;
}

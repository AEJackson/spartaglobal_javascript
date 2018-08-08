// for (var i = 0; i < 10; i++) {
//   console.log("This is loop " + i);
// }

// var array = ["Richard","Is a","Golfer"];
//
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// var i = 0;
// while (i < 5) {
//   console.log("this loop has run " + i +" times");
//   i++;
// }

// var number;
// do {
//   number = Math.random(); //random number between >=0 & <1
//   console.log(number);
// } while (number < 0.5);
var object = new Object();
// object.a ="1";
// object.b ="2";
// object.c ="3";
object["a"] ="1"; //note key always has to be a string
object["b"] ="2";
object["c"] ="3";
for (var key in object) {
  if (object.hasOwnProperty(key)) {
    console.log(key);
    console.log(object[key]);
  }
}

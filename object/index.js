// var person = new Object();
//
// person.name = "Richard";
// person.age = 32;
// person.employed = true;
// person.friend = ["Bill","Ben","The flower pot men"];
// person.sayHello = function() {
//   console.log("say hello");
// }
//
// console.log(person);

// var Person = function() {
//   this.name = "no name";
//   this.age = 0;
//   this.employed = true;
//   this.friend = [];
//   this.sayHello = function() {
//     console.log("hi my name is" + this.name);
//   }
// }
//
// var person1 = new Person();
// var person2 = new Person();
// var person3 = new Person();
//
// console.log(person1.name);
// console.log(person2.name);

var Person = function(name, age, employed) {
  this.name = name;
  this.age = age;
  this.employed = employed || "Not specified";
  this.friend = [];
  this.sayHello = function() {
    console.log("hi my name is" + this.name);
  }
}

var person1 = new Person("Richard", 75, true);
var person2 = new Person("Anthony", 21, true);
var person3 = new Person("Bob", 50, false);

console.log(person1.name);
console.log(person2.name);
console.log(person3.name);
person1.sayHello();

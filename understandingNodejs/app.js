const greeting = require("./greet");
// greet();
// The error that will occur is by design. When requiring a module from another file, if it is a function that hasd not been invoked
// this will cause an undefined error because functions that are scoped to the file they were created at

// Now using module.exports in our greet file we can invoke the vairable directly since we exported the function

greeting();

function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Person.prototype.greet = function() {
  console.log("Hello, " + this.firstname + this.lastname);
};
let john = new Person("John ", "Doe");
let jane = new Person("Jane ", "Doe");
john.greet();
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);

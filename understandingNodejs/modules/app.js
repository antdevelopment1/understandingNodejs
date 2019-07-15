let greet = require("./greet1");
greet();

// Variation 1 - Different variations on how to use this file
// let greet2 = require("./greet2");
// greet2.greet();
// Variation 2
// let greet2 = require("./greet2").greet;
// greet2();

// let greet3 = require("./greet3");
// greet3.greet();
// greet3.greeting = "Changed hello world!";

// let greet3b = require("./greet3");
// greet3b.greet();

let greet4 = require("./greet4");
let grtr = new greet4();
grtr.greet();

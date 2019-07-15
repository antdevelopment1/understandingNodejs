let greet = require("./greet1");
greet();

// Variation 1 - Different variations on how to use this file
let greet2 = require("./greet2");
greet2.greet();
// Variation 2
let greet2 = require("./greet2").greet;
greet2();

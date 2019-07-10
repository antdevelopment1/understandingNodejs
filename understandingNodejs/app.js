const greeting = require("./greet");
greet();
// The error that will occur is by design. When requiring a module from another file, if it is a function that hasd not been invoked
// this will cause an undefined error because functions that are scoped to the file they were created at

let Emmiter = require("events");

let emtr = new Emmiter();

emtr.on("greet", function() {
  console.log("Somewhere someone said hello");
});

emtr.on("greet", function() {
  console.log("A greeting occured");
});

console.log("hello");
emtr.emit("greet");

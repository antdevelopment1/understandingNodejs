var greetings = require("./greetings.json");

greet = function() {
  console.log(greetings.en);
};

module.exports = greet;

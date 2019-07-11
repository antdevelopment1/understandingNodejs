var greet = function() {
  console.log("Hello");
};

// In order to make this function available outside of this module for use we can...
module.exports = greet;

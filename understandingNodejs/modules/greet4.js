function Greetr() {
  this.greeting = "Hello world!! I am from the greet4 file";
  this.greet = function() {
    console.log(this.greeting);
  };
}

module.exports = Greetr;

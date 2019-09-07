var obj = {
  name: "John Doey",
  greet() {
    console.log(`Hello ${this.name}`);
  }
};
obj.greet();
obj.greet.call({ name: "Alex Jane" });

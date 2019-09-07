var person = {
    firstName: '',
    lastName: '',
    greet() {
        return this.firstName + " " + this.lastName;
    }
}

var john = Object.create(person);
john.firstName = "Joe";
john.lastName = "Doe";
console.log(john.greet());
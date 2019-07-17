// This is a super cool pattern.
// let arr = [];

// for (let i = 0; i < 3; i++) {
//   arr.push(function() {
//     console.log(`Hello. I am ${i}`);
//   });
// }

// arr.forEach(item => {
//   item();
// });

let obj = {
  greet: "Hello"
};

console.log(obj.greet);
console.log(obj["greet"]);
let prop = "greet";
console.log(obj[prop]);

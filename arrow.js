// this function
var func = function(param) {
  return param.split(" ");
};

// would become:
var func = param => param.split(" ");

// Examples
var users = [
  { name: "Jack", age: 21 },
  { name: "Ben", age: 23 },
  { name: "Adam", age: 22 }
];

// ES5
var ages = users.map(function(user) {
  return user.age;
});
console.log(ages); // [21, 23, 22]

// ES6
var ages = users.map(user => user.age);
console.log(ages); // [21, 23, 22]

var sum = ages.reduce((a, b) => a + b);
var sum2 = ages.reduce((a, b) => a + b, 1);
console.log(sum); // 66
console.log(sum2); // 67

// IIFE
(x => console.log(x * 2))(3); // 6

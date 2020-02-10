//ES5
function getLaptop(make, model, year) {
  return {
    make: make,
    model: model,
    year: year
  };
}

console.log(getLaptop("Apple", "MacBook", "2015"));

// ES5
function createVillainES5(name, power) {
  return { type: "Darth Vader", name: name, power: power };
}
function createHeroES5(name) {
  return { type: "Luke", name: name };
}

console.log(createVillainES5("sabir", "none"));
console.log(createHeroES5("sabir"));

// ES6
function createVillainES6(name, power) {
  return { type: "Darth Vader", name, power };
}
function createHeroES6(name) {
  return { type: "Luke", name };
}

console.log(createVillainES6("sabir", "none"));
console.log(createHeroES6("sabir"));

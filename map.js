const gods = [
    {name: 'Douglas Crockford'},
    {name: 'Christopher Nolan'},
    {name: 'Sachin Tendulkar'}
];

let miracles = new Map();

miracles.set(gods[0], 'JavaScript');
miracles.set(gods[1], 'Movie Making');
miracles.set(gods[2], 'Cricket');

// Prints "JavaScript"
console.log(miracles.get(gods[0]));

// Map Operations
let map = new Map();

map.set('foo', 123);
map.get('foo');      // 123
map.has('foo');      // true
map.delete('foo');   // true
map.has('foo');      // false

// Setting a Map

let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
]);

// Set method is chainable
let map = new Map()
    .set(1, 'one')
    .set(2, 'two')
    .set(3, 'three');

// iterating through the Map
let map = new Map([
    [false, 'no'],
    [true, 'yes']
]);

for (let key of map.keys()) {
    console.log(key);   // Returns keys
}
// Output:
// false
// true

for (let value of map.values()) {
    console.log(value); // Returns values
}
// Output:
// no
// yes

for (let entry of map.entries()) {
    console.log(entry[0], entry[1]);
}
// Output:
// false no
// true yes

// Destructuring enables you to access keys and values directly
for (let [key, value] of map.entries()) {
    console.log(key, value);
}






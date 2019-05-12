// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function printName() {
  let name = 'Tomer';
  function printer() {
    console.log(name);
  }
  printer();
};

printName();



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 0;
  return function plus() {
    counter += 1;
    return counter;
  }
};

var newCounter = counter();

// console.log(newCounter());
// console.log(newCounter());
// console.log(newCounter());


// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let counter = 0;

  return {
    increment: function () { counter++; return counter },
    decrement: function () { counter--; return counter },
  };

};

var counter2 = counterFactory();

console.log(counter2.increment());
console.log(counter2.increment());
console.log(counter2.increment());
console.log(counter2.increment());
console.log(counter2.decrement());
console.log(counter2.decrement());
console.log(counter2.decrement());
console.log(counter2.decrement());

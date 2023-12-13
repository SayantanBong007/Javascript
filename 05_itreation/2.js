//Filter

// Sample array of numbers
const numbers = [1, 2, 3, 4, 5, 6];

// Filtering even numbers using filter()
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // Outputs: [2, 4, 6]


// Sample array of numbers
const nums = [1, 2, 3, 4, 5, 6];

// Filtering even numbers using filter() with arrow function
const evenNums = nums.filter(number => number % 2 === 0);

console.log(evenNums); // Outputs: [2, 4, 6]

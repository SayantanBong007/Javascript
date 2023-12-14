//Reduce


const numbers = [1, 2, 3, 4, 5];

// Summing up all numbers using reduce() with arrow function
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Outputs: 15


const number = [10, 4, 7, 19, 5, 14];

// Finding the maximum number using reduce()
const maxNumber = number.reduce((max, current) => (current > max ? current : max), numbers[0]);

console.log(maxNumber); // Outputs: 19

/*Initialization:

numbers is the array [10, 4, 7, 19, 5, 14].
maxNumber will store the maximum number found.
reduce() starts with the initial value of max set to numbers[0], which is 10.
Iteration 1:

max is 10 (initial value).
current is 4 (the second element in the array).
The condition (current > max) evaluates to false. So, max remains 10.
Iteration 2:

max is 10 (previous max).
current is 7 (the third element in the array).
The condition (current > max) evaluates to false. So, max remains 10.
Iteration 3:

max is 10 (previous max).
current is 19 (the fourth element in the array).
The condition (current > max) evaluates to true. So, max becomes 19.
Iteration 4:

max is 19 (updated max).
current is 5 (the fifth element in the array).
The condition (current > max) evaluates to false. So, max remains 19.
Iteration 5:

max is 19 (previous max).
current is 14 (the sixth element in the array).
The condition (current > max) evaluates to false. So, max remains 19.
Result:

After going through all elements in the array, maxNumber stores the maximum number found, which is 19.
This is how the reduce() function iterates through the array, comparing each element to find the maximum value and storing it in maxNumber.*/
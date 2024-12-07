// Question 1: Use "map" to double each value in this array: [1, 2, 3, 4].
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

// Question 2: Use "filter" to get all odd numbers from this array: [10, 15, 20, 25].
const oddNumbers = [10, 15, 20, 25].filter(num => num % 2 !== 0);
console.log(oddNumbers); // Output: [15, 25]

// Question 3: Use "reduce" to calculate the sum of all numbers in this array: [5, 10, 15, 20].
const sum = [5, 10, 15, 20].reduce((total, num) => total + num, 0);
console.log(sum); // Output: 50

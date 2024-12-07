// Question 1: Create an array with these values: 10, 20, "hello", true, null.
// Log the value at the second index.
const myArray = [10, 20, "hello", true, null];
console.log(myArray[2]); // Output: "hello"

// Question 2: Add a new value, 50, to the end of the array. Log the new array.
myArray.push(50);
console.log(myArray); // Output: [10, 20, "hello", true, null, 50]

// Question 3: Remove the first element of the array and log the updated array.
myArray.shift();
console.log(myArray); // Output: [20, "hello", true, null, 50]

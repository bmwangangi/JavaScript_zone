// Question 1: Use a "for loop" to print all elements in this array: ["a", "b", "c", "d"].
const letters = ["a", "b", "c", "d"];
for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]); // Output: "a", "b", "c", "d"
}

// Question 2: Use a "for...of" loop to print the squares of these numbers: [2, 4, 6].
const nums = [2, 4, 6];
for (const num of nums) {
  console.log(num * num); // Output: 4, 16, 36
}

// Question 3: Write a function that takes an array of numbers and returns a new array 
// containing only numbers greater than 10. Use a loop to solve this.
function filterGreaterThanTen(arr) {
  const result = [];
  for (let num of arr) {
    if (num > 10) {
      result.push(num);
    }
  }
  return result;
}
console.log(filterGreaterThanTen([5, 15, 25, 8])); // Output: [15, 25]

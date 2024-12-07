// Question 1: Create a Set with these numbers: 1, 2, 3, 3, 4, 5. Log the size of the Set.
const mySet = new Set([1, 2, 3, 3, 4, 5]);
console.log(mySet.size); // Output: 5

// Question 2: Add the number 6 to the Set and check if 4 is in the Set.
mySet.add(6);
console.log(mySet.has(4)); // Output: true

// Question 3: Convert the Set back into an array and log it.
const arrayFromSet = Array.from(mySet);
console.log(arrayFromSet); // Output: [1, 2, 3, 4, 5, 6]

// Question 1: Write a recursive function to calculate the sum of all numbers from 1 to 5.
function sum(n) {
  if (n === 1) return 1;
  return n + sum(n - 1);
}
console.log(sum(5)); // Output: 15

// Question 2: Write a recursive function to find the factorial of 4.
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(4)); // Output: 24

// Question 3: Write a recursive function to reverse a string: "hello".
function reverse(str) {
  if (str === "") return "";
  return reverse(str.slice(1)) + str[0];
}
console.log(reverse("hello")); // Output: "olleh"

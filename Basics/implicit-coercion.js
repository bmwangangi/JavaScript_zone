// Declare variables
let x = 10;
let y = "5";

// Perform addition (coercion to string)
console.log("Addition (x + y):", x + y); // String concatenation

// Perform multiplication (coercion to number)
console.log("Multiplication (x * y):", x * y); // Number multiplication

// Compare using == (loose equality)
console.log("Loose Equality (10 == '10'):", 10 == "10"); // True (type coercion)

// Compare using === (strict equality)
console.log("Strict Equality (10 === '10'):", 10 === "10"); // False (no type coercion)

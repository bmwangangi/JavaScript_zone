// Declare numbers and operator
let num1 = 10;
let num2 = 5;
let operator = "multiply";

// Use a switch statement to perform the calculation
switch (operator) {
  case "add":
    console.log(num1 + num2);
    break;
  case "subtract":
    console.log(num1 - num2);
    break;
  case "multiply":
    console.log(num1 * num2);
    break;
  case "divide":
    console.log(num2 !== 0 ? num1 / num2 : "Cannot divide by zero");
    break;
  default:
    console.log("Invalid operator");
}

// Question 1: Create a Map with these key-value pairs: "name" => "Alice", "age" => 25, "job" => "Developer".
const myMap = new Map([
  ["name", "Alice"],
  ["age", 25],
  ["job", "Developer"]
]);

// Question 2: Log the value of "job" from the Map.
console.log(myMap.get("job")); // Output: "Developer"

// Question 3: Add a new key-value pair: "country" => "USA", then log all keys in the Map.
myMap.set("country", "USA");
console.log([...myMap.keys()]); // Output: ["name", "age", "job", "country"]

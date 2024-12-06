let pet = {
  type: "Dog",
  name: "Buddy"
};

console.log("Has age property?", "age" in pet);

pet.age = 4; // Add age property
console.log("Updated Pet:", pet);

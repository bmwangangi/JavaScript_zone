let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020
};

car.color = "red"; // Add property
delete car.year;   // Delete property

console.log("Updated Car:", car);

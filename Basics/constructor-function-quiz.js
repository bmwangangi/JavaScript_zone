function Car(brand, year){
  this.brand = brand;
  this.year = year;
}

// Question 1: Create a constructor function called "Car" that takes "brand" and "year" as arguments.
function Car(brand, year) {
  this.brand = brand;
  this.year = year;
}

// Question 2: Add a method to the Car constructor that prints "This car is a [brand], made in [year]."
Car.prototype.describe = function () {
  console.log(`This car is a ${this.brand}, made in ${this.year}.`);
};

// Question 3: Create two car objects using the constructor and call the method you added.
const car1 = new Car("Toyota", 2020);
const car2 = new Car("Honda", 2018);

car1.describe(); // This car is a Toyota, made in 2020.
car2.describe(); // This car is a Honda, made in 2018.

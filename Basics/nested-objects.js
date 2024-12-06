let user = {
  username: "johndoe",
  email: "johndoe@example.com",
  address: {
    street: "123 Main St",
    city: "Springfield",
    zipcode: 12345
  }
};

console.log("City:", user.address.city);

user.address.zipcode = 54321; // Update zipcode
console.log("Updated User:", user);

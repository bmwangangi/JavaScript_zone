let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925
};

for (let key in book) {
  console.log(`${key}: ${book[key]}`);
}

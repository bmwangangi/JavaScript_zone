let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess = 0;

while (guess !== randomNumber) {
  guess = Math.floor(Math.random() * 10) + 1; // Simulating guesses
  console.log(`Guess: ${guess}`);
}

console.log(`Correct! The number was ${randomNumber}.`);

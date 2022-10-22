const readline = require("readline");
const terminal = readline.createInterface(
{
  input: process.stdin,
  output: process.stdout,
});
const prompt = require("prompt-sync")();
const alert = require("prompt-sync")();

let value = 2;
let numberOfLives = 3;
let points = 0;
let won = true;

function guessStart() {
  terminal.question("Hi, there ready?", (reply) => {
    let userName = prompt("input your username: ");
    console.log(userName);
  
    while (numberOfLives && won != 0) {
      let randomNumber =  Math.floor(Math.random() * value) + 1;
      let userGuess = prompt(`Guess the number between range 1 and ${value}: `);

      if (userGuess == randomNumber) {
      alert("Congratulations!!! you guessed right");
      points++;
      value++;
      alert(`You have ${numberOfLives} lives`);
      increment();
      }  else if (userGuess != randomNumber)       {
        alert("oops!!! you guessed wrong try again!");
        numberOfLives--;
        alert(`you have ${numberOfLives} lives left`);
      } else {
       won = false;
      };
    }
    alert(`Game Over!!! \n total points  is: ${points} \n try again`);
    terminal.close();
 });
}
function increment() {
  if (won == true) {
    alert("Time to move to the next stage");
  };
};
guessStart(value);
  
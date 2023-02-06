var computerScore = 0;
var userScore = 0;
var computerChoice;
var userChoice;

// getting the user choice and verify that its valid
function getUserChoice() {
  var choice;
  do {
    choice = prompt("Please enter on of this option (rock,paper,scissors)");
    choice = choice.toLowerCase();
  } while (choice != "rock" && choice != "paper" && choice != "scissors");
  return choice;
}

// Computer choice
function getComputerChoice() {
  var choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function game() {
  while (userScore < 5 && computerScore < 5) {
    userChoice = getUserChoice();
    computerChoice = getComputerChoice();
    if (userChoice == computerChoice) {
      console.log(`computer choose ${computerChoice}, Draw`);
      console.log(
        `Score: computer score : ${computerScore}, your score : ${userScore}`
      );
    } else if (userChoice == "rock" && computerChoice == "paper") {
      console.log(`computer choose ${computerChoice}, computer win`);
      console.log(
        `Score: computer score : ${++computerScore}, your score : ${userScore}`
      );
    } else if (userChoice == "rock" && computerChoice == "scissors") {
      console.log(`computer choose ${computerChoice}, you win`);
      console.log(
        `Score: computer score : ${computerScore}, your score : ${++userScore}`
      );
    } else if (userChoice == "paper" && computerChoice == "scissors") {
      console.log(`computer choose ${computerChoice}, computer win`);
      console.log(
        `Score: computer score : ${++computerScore}, your score : ${userScore}`
      );
    } else if (userChoice == "scissors" && computerChoice == "rock") {
      console.log(`computer choose ${computerChoice}, computer win`);
      console.log(
        `Score: computer score : ${++computerScore}, your score : ${userScore}`
      );
    }
  }
  if (userScore > computerScore) {
    console.log(
      `Result: computer :${computerScore}   you: ${userScore} you win :)`
    );
  } else if (userScore < computerScore) {
    console.log(
      `Result: computer :${computerScore}   you: ${userScore} computer win ):`
    );
  } else {
    console.log(
      `Result: computer :${computerScore}   you: ${userScore} its a Draw No one Win :) ):`
    );
  }
  playAgain();
}

function playAgain(play) {
  var play = prompt("want to play again type (yes) (NO)");
  if (play.toLowerCase() == "yes") {
    userScore = 0;
    computerScore = 0;
    game();
  } else {
    return 0;
  }
}

game();

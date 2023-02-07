var computerScore = 0;
var userScore = 0;
var computerChoice;
var userChoice;
var userBtns = document.querySelectorAll(".btn-user");
var computerBtns = document.querySelectorAll(".btn-computer");

function resetRound() {
  userBtns.forEach((userBtn) => {
    userBtn.classList.remove("disabled");
  });
  computerBtns.forEach((computerBtn) => {
    computerBtn.classList.add("disabled");
  });
}
// getting the user choice and verify that its valid
function getUserChoice() {
  var choice;
  userBtns.forEach((userBtn) =>
    userBtn.addEventListener("click", () => {
      choice = userBtn.attributes["data-player-choice"].value;
      userBtns.forEach((userBtn) => {
        if (choice != userBtn.attributes["data-player-choice"].value) {
          userBtn.classList.add("disabled");
        }
      });
      getComputerChoice(choice);
    })
  );
}

// Computer choice
function getComputerChoice(userChoice) {
  console.log(userChoice);
  var choices = ["rock", "paper", "scissors"];
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerChoice);
  computerBtns.forEach((computerBtn) => {
    if (
      computerChoice == computerBtn.attributes["data-computer-choice"].value
    ) {
      computerBtn.classList.remove("disabled");
      return;
    }
  });
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

// game();

getUserChoice();

var computerScore = document.querySelector(".computer-score");
var userScore = document.querySelector(".player-score");
var computerSc = 0;
var userSc = 0;
var computerChoice;
var userChoice;
var userBtns = document.querySelectorAll(".btn-user");
var computerBtns = document.querySelectorAll(".btn-computer");
var start = document.querySelector(".start");
var currentResult = document.querySelector(".current-result");
var finalResult = document.querySelector(".final-result");

function game() {}

function startPlay() {
  computerScore.innerText = 0;
  userScore.innerHTML = 0;
  finalResult.classList.add("d-none");
  computerSc = 0;
  userSc = 0;
  userBtns.forEach((userBtn) => {
    userBtn.classList.remove("disabled");
  });
}
function endGame() {
  userBtns.forEach((userBtn) => {
    userBtn.classList.add("disabled");
  });
}

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
    userBtn.addEventListener("click", (e) => {
      choice = userBtn.attributes["data-player-choice"].value;
      userBtns.forEach((userBtn) => {
        if (choice != userBtn.attributes["data-player-choice"].value) {
          userBtn.classList.add("disabled");
        }
      });
      if (userSc === 5 || computerSc === 5) {
        endGame();
        return;
      }
      getComputerChoice(choice);
      setTimeout(resetRound, 2000);
    })
  );
}
// Computer choice
function getComputerChoice(userChoice) {
  var choices = ["rock", "paper", "scissors"];
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  computerBtns.forEach((computerBtn) => {
    if (
      computerChoice == computerBtn.attributes["data-computer-choice"].value
    ) {
      computerBtn.classList.remove("disabled");
      return;
    }
  });
  scoreTracker(userChoice, computerChoice);
  return;
}

function scoreTracker(userChoice, computerChoice) {
  if (userChoice == computerChoice) {
    currentResult.innerHTML = "it's a tie";
    setTimeout(() => currentResult.classList.add("d-none"), 2000);
  } else if (userChoice == "rock" && computerChoice == "paper") {
    currentResult.innerHTML = "Computer Win";
    setTimeout(() => currentResult.classList.add("d-none"), 2000);
    computerScore.innerHTML = ++computerSc;
  } else if (userChoice == "rock" && computerChoice == "scissors") {
    currentResult.innerHTML = "Player Win";
    setTimeout(() => currentResult.classList.add("d-none"), 2000);
    userScore.innerHTML = ++userSc;
  } else if (userChoice == "paper" && computerChoice == "scissors") {
    currentResult.innerHTML = "Computer Win";
    setTimeout(() => currentResult.classList.add("d-none"), 2000);
    computerScore.innerHTML = ++computerSc;
  } else if (userChoice == "scissors" && computerChoice == "rock") {
    currentResult.innerHTML = "Computer Win";
    setTimeout(() => currentResult.classList.add("d-none"), 2000);
    computerScore.innerHTML = ++computerSc;
  } else if (userChoice == "scissors" && computerChoice == "paper") {
    currentResult.innerHTML = "Player Win";
    setTimeout(() => currentResult.classList.add("d-none"), 2000);
    userScore.innerHTML = ++userSc;
  } else if (userChoice == "paper" && computerChoice == "rock") {
    currentResult.innerHTML = "Player Win";
    setTimeout(() => currentResult.classList.add("d-none"), 2000);
    userScore.innerHTML = ++userSc;
  }

  if (userSc == 5 && computerSc < 5) {
    finalResult.classList.remove("d-none");
    finalResult.innerHTML = `THE ONE REACHED FIVE FIRST IS YOU`;
    return;
  } else if (computerSc == 5 && userSc < 5) {
    finalResult.classList.remove("d-none");
    finalResult.innerHTML = `THE ONE REACHED FIVE FIRST IS the computer`;
    return;
  }

  setTimeout(() => (currentResult.innerHTML = ""), 2000);
  currentResult.classList.remove("d-none");
}

start.addEventListener("click", () => {
  startPlay();
});

getUserChoice();
endGame();

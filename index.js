function computerPlay() {
  const actions = ['Rock', 'Paper', 'Scissors'];
  const index = Math.floor(Math.random() * 3);
  return actions[index]
};

const getUserSelection = () => window.prompt('Rock, Scissors or Paper?');

function defineWinner(playerPoints, computerPoints) {
  if (playerPoints > computerPoints) {
    console.log(`You won the game! You ${playerPoints} : Computer ${computerPoints}`)
  } else if (computerPoints > playerPoints) {
    console.log(`You lose the game! You ${playerPoints} : Computer ${computerPoints}`)
  } else {
    console.log(`Game Draw! You ${playerPoints} : Computer ${computerPoints}`)
  }
}

function playRound(playerSelection, computerSelection) {
  let userChoice = 'you';
  if (playerSelection) {
    userChoice = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  }
  const computerChoice = computerSelection;

  const selectionMessage = (winner, loser, result) => {
    if (result >= 0) {
      console.log(`You ${result === 1 ? 'Win' : 'Lose'}! ${winner} beats ${loser}!`);
    } else {
      console.log(`It's a draw with ${winner}!`);
    }
  };

  switch (userChoice) {
    case computerChoice:
      selectionMessage(userChoice, computerChoice, -1)
      return undefined;
    case 'Rock':
      switch (computerChoice) {
        case 'Paper':
          selectionMessage(computerChoice, userChoice, 0)
          return false;
        default:
          selectionMessage(userChoice, computerChoice, 1)
          return true;
      }
    case 'Paper':
      switch (computerChoice) {
        case 'Scissors':
          selectionMessage(computerChoice, userChoice, 0)
          return false;
        default:
          selectionMessage(userChoice, computerChoice, 1)
          return true;
      }
    case 'Scissors':
      switch (computerChoice) {
        case 'Rock':
          selectionMessage(computerChoice, userChoice, 0)
          return false;
        default:
          selectionMessage(userChoice, computerChoice, 1)
          return true;
      }
    default:
      alert("Invalid input! Choose paper, rock or scissors");
      return playRound(getUserSelection(), computerSelection)
  }
}

function game() {
  let userNumPoints = 0;
  let computerNumPoints = 0;

  function displayRoundResults(userPoints, computerPoints) {
    console.log(`
    Total
    You ${userPoints} : Computer ${computerPoints}
    `)
  }

  for (let i = 0; i < 5; i++) {
    const roundResult = playRound(getUserSelection(), computerPlay());
    if (roundResult) {
      userNumPoints++;
      displayRoundResults(userNumPoints, computerNumPoints);
    } else if (roundResult === undefined) {
      userNumPoints++;
      computerNumPoints++;
      displayRoundResults(userNumPoints, computerNumPoints);
    } else if (!roundResult) {
      computerNumPoints++;
      displayRoundResults(userNumPoints, computerNumPoints);
    }
  }
  defineWinner(userNumPoints, computerNumPoints);
};

game();

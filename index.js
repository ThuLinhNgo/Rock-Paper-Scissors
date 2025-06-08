let playMode = prompt("Please select: 1-Single, 3-BO3");
let playerWinTime = 0;
let machineWinTime = 0;

function getResult(playerChoice) {
  if (playMode !== "1" && playMode !== "3") {
    playMode = prompt("Please choose play mode: 1-Single, 3-BO3");
    return;
  }
  let machineChoice = Math.floor(Math.random() * 3 + 1);
  if (playerChoice == machineChoice) {
    if (playMode === "1") {
      alert("draw");
    } else {
      alert("Human: " + playerWinTime + " - " + machineWinTime + " :Machine");
    }
    return;
  }

  if (playMode === "1") {
    showSingleResult(playerChoice, machineChoice);
  } else if (playMode === "3") {
    if (doesHumanWin(playerChoice, machineChoice)) {
      playerWinTime = playerWinTime + 1;
    } else {
      machineWinTime = machineWinTime + 1;
    }
    if (playerWinTime === 2) {
      playerWinTime = 0;
      machineWinTime = 0;
      alert("You win BO3");
    } else if (machineWinTime === 2) {
      playerWinTime = 0;
      machineWinTime = 0;
      alert("Machine win BO3");
    } else {
      alert("Human: " + playerWinTime + " - " + machineWinTime + " :Machine");
    }
  } else {
    alert("Please refresh page and select play mode");
  }
}

function showSingleResult(playerChoice, machineChoice) {
  if (doesHumanWin(playerChoice, machineChoice)) {
    alert("You Win");
  } else {
    alert("Machine Win");
  }
}

function doesHumanWin(playerChoice, machineChoice) {
  switch (playerChoice) {
    case 1:
      if (machineChoice == 2) {
        return false;
      } else {
        return true;
      }
      break;
    case 2:
      if (machineChoice == 3) {
        return false;
      } else {
        return true;
      }
      break;
    case 3:
      if (machineChoice == 1) {
        return false;
      } else {
        return true;
      }
      break;
  }
}

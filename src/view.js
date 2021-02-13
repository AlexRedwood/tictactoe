import * as Utility from "./utility";

function renderBoard(board) {
  // error handling
  Utility.checkIfNotEmptyArray(board);
  // main logic
  let cells = document.getElementsByClassName("cell");

  // render items from an array to dom cells
  for (let [index, item] of board.entries()) {
    if (!Number.isInteger(item)) {
      cells[index].textContent = item;
      cells[index].style.opacity = 1;
    } else {
      cells[index].textContent = "";
      cells[index].style.opacity = 0;
    }
  }
}

function showMessage(text) {
  let message = document.getElementsByClassName("message")[0];
  let resetBtn = document.getElementsByClassName("reset")[0];
  message.textContent = text;

  message.style.visibility = "visible";
  resetBtn.style.visibility = "visible";

  message.style.opacity = "1";
  resetBtn.style.opacity = "1";
}

function hideMessage() {
  let message = document.getElementsByClassName("message")[0];
  let resetBtn = document.getElementsByClassName("reset")[0];
  message.style.opacity = "0";
  resetBtn.style.opacity = "0";
  setTimeout(() => {
    message.style.visibility = "hidden";
    resetBtn.style.visibility = "hidden";
  }, 400);
}

function hideAll() {
  let cells = [...document.getElementsByClassName("cell")];
  cells.forEach((element) => {
    element.style.opacity = 0;
  });
  hideMessage();
}

function renderMessage(gameState) {
  // gameState can be:
  // not over
  // userwin
  // userlost
  // tie
  if (gameState === "not over") return;
  let congrats = "You won! Well done! Wanna play more?";
  let sadNews = "You lost. Wanna try again?";
  let tie = "It's a tie. Wanna try more?";
  let text;
  if (gameState === "userwin") {
    text = congrats;
  } else if (gameState === "userlost") {
    text = sadNews;
  } else {
    text = tie;
  }
  showMessage(text);
}

function renderMarkChoice(mark) {
  let choice = document.getElementsByClassName("choice")[0];
  choice.textContent = `Playing as: ${mark}.`;
}

export { renderBoard, renderMessage, hideAll, renderMarkChoice };

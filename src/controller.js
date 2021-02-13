function manageBtns(callback) {
  let cells = document.getElementsByClassName("cell");

  for (let cell of cells) {
    cell.addEventListener("click", callback);
  }
}

function removeCellListener(cellNumber, callback) {
  let markedCell = document.getElementById(`cell-${cellNumber}`);
  markedCell.removeEventListener("click", callback);
}

function disableAllCells(callback) {
  let cells = document.getElementsByClassName("cell");

  for (let cell of cells) {
    cell.removeEventListener("click", callback);
  }
}

function manageReset(callback) {
  let resetBtn = document.getElementsByClassName("reset")[0];
  resetBtn.addEventListener("click", callback);
}

function manageChoice(callback) {
  let choiceBtn = document.getElementsByClassName("change")[0];
  choiceBtn.addEventListener("click", callback);
}

export {
  manageBtns,
  removeCellListener,
  disableAllCells,
  manageReset,
  manageChoice,
};

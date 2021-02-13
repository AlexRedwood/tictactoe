import * as Utility from "./utility";

function getDefaultBoardState() {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8];
}

function getAllEmptyCells(board) {
  // error handling
  Utility.checkIfNotEmptyArray(board);
  // main logic
  return board.filter((cell) => Number.isInteger(cell)) || [];
}

function getMarkedCells(board, mark) {
  // error handling
  Utility.checkIfNotEmptyArray(board);
  // main logic
  let marked = [];
  for (let [index, cell] of board.entries()) {
    if (cell === mark) marked.push(index);
  }
  return marked;
}

function isTie(board) {
  // function return true when there is a draw
  // for. e.g. isTie(["x", "x", "o", "o", "o", "x", "x", "x", "o"])  -> true
  // for. e.g. isTie([0, 1, 2, 3, 4, 5, 6, 7, 8])  ->  false
  let tie = false;
  if (getAllEmptyCells(board).length === 0) {
    tie = true; // then it is a tie
  }
  return tie;
}

function isWin(board, mark) {
  // function return true if player that played mark has won
  // for. e.g. isWin(["x", 1, "o", 3, "x", "o", 6, 7, "x"], "x")  -> true
  // for. e.g. isWin([0, 1, 2, 3, 4, 5, 6, 7, 8], "x")  ->  false
  // for. e.g. isWin(["x", "o", "x", 3,"o", 5, 6, "o", "x"], "o")  -> true

  // error handling
  Utility.checkIfNotEmptyArray(board);
  // main logic
  let winConditions = [
    [0, 4, 8],
    [2, 4, 6],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  let marked = getMarkedCells(board, mark);

  // check if SOME of the wincondition subarrays
  // contains EVERY cell from already marked cells
  // return true/false
  let isWin = winConditions.some((wincondition) => {
    return wincondition.every((cell) => {
      return marked.includes(cell);
    });
  });
  return isWin;
}

function getRandomEmptyCellId(board) {
  let emptyCells = getAllEmptyCells(board);
  let randomCellId = Utility.getRandomItem(emptyCells);
  return randomCellId;
}

export {
  getAllEmptyCells,
  getMarkedCells,
  isWin,
  getDefaultBoardState,
  isTie,
  getRandomEmptyCellId,
};

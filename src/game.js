import initializeButtons from "./controller";

let board = {
  default: [0, 1, 2, 3, 4, 5, 6, 7, 8],

  state: [0, 1, 2, 3, 4, 5, 6, 7, 8],

  test: ["x", 1, 2, "o", "o", 5, "x", "x", "o"],
};

function log(board) {
  console.log(`${board[0]}, ${board[1]}, ${board[2]}`);
  console.log(`${board[3]}, ${board[4]}, ${board[5]}`);
  console.log(`${board[6]}, ${board[7]}, ${board[8]}`);
}

let mark = {
  ai: "x",
  user: "o",
};

function getAllEmptyCells(board, mark) {
  let emptyCells = [];
  board.forEach((cell) => {
    if (cell !== mark && cell !== mark) emptyCells.push(cell);
  });
  return emptyCells;
}

function getMarkedCells(board, mark) {
  let marked = [];
  board.forEach((cell, index) => {
    if (cell === mark) marked.push(index);
  });
  return marked;
}

function checkIfWon(board, mark) {
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
  let win = false;

  winConditions.forEach((condition) => {
    let count = 0;
    condition.forEach((position) => {
      if (marked.includes(position)) count++;
    });
    if (count === 3) {
      win = true;
      return;
    }
  });

  win
    ? console.log(`We have a winner. His mark is ${mark}.`)
    : console.log(`We don't have a winner yet.`);
}

function start() {
  log(board.test);

  checkIfWon(board.test, mark.user);
  initializeButtons();
}

export default start;

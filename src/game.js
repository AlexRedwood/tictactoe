import initializeButtons from "./controller";

let board = {
  default: [0, 1, 2, 3, 4, 5, 6, 7, 8],

  state: [0, 1, 2, 3, 4, 5, 6, 7, 8],

  test: ["x", 1, 2, "o", "x", 5, "x", "x", "o"],
};

let mark = {
  ai: "x",
  user: "o",
};

function log(board) {
  console.log(`${board[0]}, ${board[1]}, ${board[2]}`);
  console.log(`${board[3]}, ${board[4]}, ${board[5]}`);
  console.log(`${board[6]}, ${board[7]}, ${board[8]}`);
  console.log("\n");
}

function getAllEmptyCells(board) {
  let emptyCells = [];
  board.forEach((cell) => {
    if (cell !== mark.ai && cell !== mark.user) emptyCells.push(cell);
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
  console.log(`Checking a winner for ${mark}`);
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

  // check if marked cells include all marks from wincondition
  // if so - then someone has won
  winConditions.forEach((condition) => {
    let count = 0;
    condition.forEach((position) => {
      if (marked.includes(position)) count++;
    });
    if (count === condition.length) {
      win = true;
      return;
    }
  });

  win
    ? console.log(`We have a winner. His mark is ${mark}.`)
    : console.log(`We don't have a winner yet.`);

  return win;
}

function isDraw(board) {
  if (
    getAllEmptyCells(board).length === 0 &&
    !checkIfWon(board, mark.ai) &&
    !checkIfWon(board, mark.user)
  ) {
    console.log("It's a draw.");
    return true;
  }
  console.log("Not a draw.");
  return false;
}

function minimax(board, cell, level) {
  console.log(`Depth level is ${level}.`);
  if (level > 5) {
    console.log(`Max depth level ${level} is reached. Exiting...`);
    return;
  }
  level++;
}

function AiMakeMove(board, mark, cell) {
  board[cell] = mark;
}

function start() {
  log(board.test);

  initializeButtons();
}

export { start };

import "normalize.css";
import "./style.scss";
import * as Board from "./board";
import * as View from "./view";
import * as Controller from "./controller";

(function () {
  let data = {
    board: Board.getDefaultBoardState(),
    userMark: "X",
    AIMark: "O",
  };

  function initialize(e) {
    // get id of clicked cell
    let currentCellId = e.currentTarget.id.split("-")[1];
    // user makes move + render
    move(data.userMark, currentCellId, initialize);
    // ai makes move + render
    if (gameOver(data.board) === "not over") {
      move(data.AIMark, Board.getRandomEmptyCellId(data.board), initialize);
    }
  }

  function move(mark, cellId, callback) {
    // mark the cell
    data.board[cellId] = mark;
    // render the updated board
    if (mark === data.userMark) {
      View.renderBoard(data.board);
    } else {
      setTimeout(() => View.renderBoard(data.board), 300);
    }

    // if game is over then disable all buttons
    // and render the message to user with reset button
    if (gameOver(data.board) !== "not over") {
      Controller.disableAllCells(callback);
      View.renderMessage(gameOver(data.board));
    }

    // remove evt listener so user can click only once
    Controller.removeCellListener(cellId, callback);
  }

  function gameOver(board) {
    if (Board.isWin(board, data.userMark)) return "userwin";
    if (Board.isWin(board, data.AIMark)) return "userlost";
    if (Board.isTie(board)) return "tie";
    return "not over";
  }

  function reset() {
    // reset board state to default
    data.board = Board.getDefaultBoardState();
    // update the view
    setTimeout(() => {
      View.renderBoard(data.board);
    }, 400);
    // View.renderBoard(data.board);
    // reinitialize buttons to play again
    Controller.manageBtns(initialize);
    // hide message and reset button :
    View.hideAll();
  }

  function changeMark() {
    // change marks
    [data.userMark, data.AIMark] = [data.AIMark, data.userMark];
    // reset everything after changing
    reset();
    if (data.AIMark === "X") {
      move(data.AIMark, Board.getRandomEmptyCellId(data.board), initialize);
    }
    // render text : "Playing as ..."
    View.renderMarkChoice(data.userMark);
  }

  Controller.manageBtns(initialize);
  Controller.manageReset(reset);
  Controller.manageChoice(changeMark);
})();

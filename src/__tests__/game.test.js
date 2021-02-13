import * as Board from "../board";
import "@testing-library/jest-dom";

test("get default board", () => {
  let defaultBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  expect(Board.getDefaultBoardState()).toEqual(defaultBoard);
});

test("gets all cells that contain numbers (not players mark)", () => {
  let board1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let board2 = [0, "x", "x", "o", 4, "x", 6, "o", 8];
  let board3 = ["o", 1, 2, 3, 4, "x", "x", 7, "o"];

  expect(Board.getAllEmptyCells(board1)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  expect(Board.getAllEmptyCells(board2)).toEqual([0, 4, 6, 8]);
  expect(Board.getAllEmptyCells(board3)).toEqual([1, 2, 3, 4, 7]);
});

test("throw error if passed empty array", () => {
  let emptyArray = [];
  expect(() => Board.getAllEmptyCells(emptyArray)).toThrowError(
    "Expected not empty array"
  );
});

test("throw error if passed not array", () => {
  let string = "Hi there!";
  expect(() => Board.getAllEmptyCells(string)).toThrowError(
    "Wrong type given - string, expected an array"
  );
});

test("gets all cells that contain players mark", () => {
  let board1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let board2 = [0, "x", "x", "o", 4, "x", 6, "o", 8];
  let board3 = ["o", 1, 2, 3, 4, "x", "x", 7, "o"];

  expect(Board.getMarkedCells(board1, "o")).toEqual([]);
  expect(Board.getMarkedCells(board2, "x")).toEqual([1, 2, 5]);
  expect(Board.getMarkedCells(board3, "o")).toEqual([0, 8]);
});

test("throw error if passed empty array", () => {
  let emptyArray = [];
  expect(() => Board.getMarkedCells(emptyArray)).toThrowError(
    "Expected not empty array"
  );
});

test("throw error if passed not array", () => {
  let string = "Hi there!";
  expect(() => Board.getMarkedCells(string)).toThrowError(
    "Wrong type given - string, expected an array"
  );
});

test("check if certain player has won ", () => {
  let markO = "o";
  let markX = "x";

  let board1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let board2 = ["x", 1, 2, "x", "o", 5, "x", "o", 8];
  let board3 = ["x", "o", "x", 3, "o", "x", "o", 7, "x"];
  let board4 = ["o", "x", "x", "x", 4, "o", "x", "o", 8];
  let board5 = ["x", "o", "o", "x", "o", "o", "o", "x", "x"];

  expect(Board.isWin(board1, markX)).toBe(false);
  expect(Board.isWin(board2, markX)).toBe(true);
  expect(Board.isWin(board3, markX)).toBe(true);
  expect(Board.isWin(board4, markX)).toBe(false);
  expect(Board.isWin(board5, markO)).toBe(true);
});

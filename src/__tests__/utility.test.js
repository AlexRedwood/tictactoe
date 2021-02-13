import * as Utility from "../utility";

test("throw error if passed empty array", () => {
  let emptyArray = [];
  expect(() => Utility.checkIfNotEmptyArray(emptyArray)).toThrowError("Expected not empty array");
});
function checkIfNotEmptyArray(arr) {
  let type = typeof arr;
  // error handling
  if (!Array.isArray(arr)) {
    throw new Error(`Wrong type given - ${type}, expected an array`);
  } else if (arr.length === 0) {
    throw new Error("Expected not empty array");
  }
}

function getRandomItem(arr) {
  let len = arr.length;
  let randomItem = Math.floor(Math.random() * len);
  return arr[randomItem];
}

export { checkIfNotEmptyArray, getRandomItem };

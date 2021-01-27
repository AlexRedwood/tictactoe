function initializeButtons() {
  let buttons = document.getElementsByClassName("cell");

  for (let button of buttons) {
    button.addEventListener("click", initialize);
  }
}

function initialize(e) {
  console.log(e.currentTarget.textContent);
}

export default initializeButtons;

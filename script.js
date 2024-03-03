// selected all html id
const resultOutput = document.getElementById("result-output");
const incrementInput = document.getElementById("increment-input");
const decrementInput = document.getElementById("decrement-input");
const incrementBtn = document.getElementById("increment-input-btn");
const decrementBtn = document.getElementById("decrement-input-btn");
const resetBtn = document.getElementById("reset-input-btn");

// select Audio from This PC
const audioSound = new Audio("./Audio-sound/shooting-sound-fx-159024.mp3");

// window onload function
window.onload = function () {
  mainFunction();
};

// global variable
let result = 0;

// mainFunction call
function mainFunction() {
  displayResult(resultOutput);

  incrementBtn.addEventListener("click", incrementBtnFunction);
  decrementBtn.addEventListener("click", decrementBtnFunction);

  incrementInput.addEventListener("keyup", maxValueControl);
  decrementInput.addEventListener("keyup", maxValueControl);

  resetBtn.addEventListener("click", resetBtnFunction);
}

// displayResult function
function displayResult(resultOutput) {
  if (result < 0) {
    result = 0;
    alert("Result can not be Negative!");
  }
  let finalResult = result;
  if (result < 10) {
    finalResult = `0${result}`;
  }
  resultOutput.innerText = finalResult;
}

// maxValueControl  function
function maxValueControl(e) {
  if (e.target.value > 100) {
    e.target.value = 100;
  }
  if (e.target.value < 0) {
    e.target.value = 0;
  }
}

// function incrementBtnFunction()
function incrementBtnFunction() {
  const incrementValue = parseInt(incrementInput.value);
  result += incrementValue;
  displayResult(resultOutput);

  resetBtn.addEventListener("click", resetBtnFunction);
  audioSound.play();
  audioSound.volume = 0.5;
}

//   function decrementBtnFunction()
function decrementBtnFunction() {
  const decrementValue = parseInt(decrementInput.value);
  result -= decrementValue;
  displayResult(resultOutput);

  resetBtn.addEventListener("click", resetBtnFunction);
  audioSound.play();
  audioSound.volume = 0.5;
}

// function resetBtnFunction()
function resetBtnFunction() {
  resultOutput.innerText = "00";
  result = 0;
  audioSound.play();
  audioSound.volume = 0.5;
}

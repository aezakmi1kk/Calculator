const inputFirst = document.getElementById("first_input");
const inputSecond = document.getElementById("second_input");
const btnReset = document.getElementById("btn_reset");
const btnPlus = document.getElementById("btn_plus");
const btnMinus = document.getElementById("btn_minus");
const btnMult = document.getElementById("btn_mult");
const btnDiv = document.getElementById("btn_div");
const btnPercent = document.getElementById("btn_percent");
const btnSubmit = document.getElementById("btn_submit");
const resultForm = document.getElementById("result");
const defaultResultText = "Result";
let action = "";

function calcFunction(firstNum, secondNum, action) {
  const firstNumber = Number(firstNum.value);
  const secondNumber = Number(secondNum.value);
  if (action == "+") {
    return firstNumber + secondNumber;
  }
  if (action == "-") {
    return firstNumber - secondNumber;
  }
  if (action == "*") {
    return firstNumber * secondNumber;
  }
  if (action == "/") {
    return firstNumber / secondNumber;
  }
  if (action == "%") {
    return (secondNumber * 100) / firstNumber + "%";
  }
}

btnPlus.onclick = function () {
  action = "+";
};
btnMinus.onclick = function () {
  action = "-";
};
btnMult.onclick = function () {
  action = "*";
};
btnDiv.onclick = function () {
  action = "/";
};
btnPercent.onclick = function () {
  action = "%";
};

btnSubmit.onclick = function () {
  const calcResult = calcFunction(first_input, second_input, action);
  resultForm.textContent = calcResult;
};

btnReset.onclick = function () {
  resultForm.textContent = defaultResultText;
};

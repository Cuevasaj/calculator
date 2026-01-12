let currentOperator;

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const operate = (leftNum, operator, rightNum) => {
  if (operator === "+") {
    return add(leftNum, rightNum);
  } else if (operator === "-") {
    return subtract(leftNum, rightNum);
  } else if (operator === "*") {
    return multiply(leftNum, rightNum);
  } else if (operator === "/") {
    return divide(leftNum, rightNum);
  }
};

const currentOperand = document.querySelector(".current-operand");
const previousOperand = document.querySelector(".previous-operand");

const numBtn = document.querySelectorAll(".btn-number");
numBtn.forEach((button) => {
  button.addEventListener("click", function (event) {
    currentOperand.textContent += event.target.textContent;
    console.log(`You clicked number: ${event.target.textContent}`);
  });
});

const btnOperator = document.querySelectorAll(".btn-operator");
btnOperator.forEach((button) => {
  button.addEventListener("click", function (event) {
    previousOperand.textContent = currentOperand.textContent;
    currentOperator = event.target.dataset.opt;
    currentOperand.textContent = "";
    console.log(typeof currentOperator);
    console.log(`You clicked Operator: ${event.target.textContent}`);
  });
});

const btnEquals = document.querySelector(".btn-equals");
console.log(btnEquals);
btnEquals.addEventListener("click", function (event) {
  // were getting the text content of whats in previous amd current operand and turning it from string to number
  const num1 = parseFloat(previousOperand.textContent);
  const num2 = parseFloat(currentOperand.textContent);

  // since we have those real numbers in our function now we can add them to our function
  const result = operate(num1, currentOperator, num2);
  currentOperand.textContent = result;
  // now we can show the result on the screen
  console.log(`You clicked: ${event.target.textContent}`);
});

const btnClear = document.querySelector(".btn-clear");
btnClear.addEventListener("click", function (event) {
  currentOperand.textContent = "0";
  console.log(`You clicked ${event.target.textContent}`);
});

const btnDel = document.querySelector(".btn-del");
btnDel.addEventListener("click", function (event) {
  console.log(currentOperand);
  let newStr = currentOperand.textContent.slice(0, -1);
  console.log(`this is your new string of numbers:${newStr}`);
  currentOperand.textContent = newStr;

  if (newStr === "") {
    return (currentOperand.textContent = "");
  }

  console.log(`You clicked ${event.target.textContent}`);
});

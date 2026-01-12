let currentOperator;
let shouldResetScreen = false;

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
  if (num2 === 0) {
    return `Error`;
  }

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

const roundResult = (number) => {
  return Math.round(number * 1000) / 1000;
};

const currentOperand = document.querySelector(".current-operand");
const previousOperand = document.querySelector(".previous-operand");

const numBtn = document.querySelectorAll(".btn-number");
numBtn.forEach((button) => {
  button.addEventListener("click", function (event) {
    if (shouldResetScreen) {
      currentOperand.textContent = "";
      shouldResetScreen = false;
    }
    currentOperand.textContent += event.target.textContent;
    console.log(`You clicked number: ${event.target.textContent}`);
  });
});

const btnOperator = document.querySelectorAll(".btn-operator");
btnOperator.forEach((button) => {
  button.addEventListener("click", function (event) {
    if (currentOperand.textContent === "") {
      currentOperator = event.target.dataset.opt;
      return;
    }

    if (previousOperand.textContent !== "") {
      const num1 = parseFloat(previousOperand.textContent);
      const num2 = parseFloat(currentOperand.textContent);

      const result = operate(num1, currentOperator, num2);
      previousOperand.textContent = roundResult(result);
    } else {
      previousOperand.textContent = currentOperand.textContent;
    }

    currentOperator = event.target.dataset.opt;
    currentOperand.textContent = "";

    console.log(typeof currentOperator);
    console.log(`You clicked Operator: ${event.target.textContent}`);
  });
});

const btnDecimal = document.querySelector(".btn-decimal");
btnDecimal.addEventListener("click", function (event) {
  if (shouldResetScreen) {
    currentOperand.textContent = "0";
    shouldResetScreen = false;
    return;
  }

  if (currentOperand.textContent.includes(".")) {
    return console.log("You already have a . in your number");
  }
  currentOperand.textContent += event.target.textContent;
});

const btnEquals = document.querySelector(".btn-equals");
console.log(btnEquals);
btnEquals.addEventListener("click", function (event) {
  if (currentOperator === undefined || currentOperand.textContent === "") {
    return console.log(`User Error`);
  }
  // were getting the text content of whats in previous amd current operand and turning it from string to number
  const num1 = parseFloat(previousOperand.textContent);
  const num2 = parseFloat(currentOperand.textContent);
  // since we have those real numbers in our function now we can add them to our function
  const result = operate(num1, currentOperator, num2);
  if (isNaN(result)) {
    currentOperand.textContent = result;
  } else {
    currentOperand.textContent = roundResult(result);
  }
  shouldResetScreen = true;
  // now we can show the result on the screen
  console.log(`You clicked: ${event.target.textContent}`);
});

const btnClear = document.querySelector(".btn-clear");
btnClear.addEventListener("click", function (event) {
  currentOperand.textContent = "";
  previousOperand.textContent = "";
  currentOperator = undefined;

  console.log(
    `You clicked ${event.target.textContent}. The calculator has been cleared`
  );
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

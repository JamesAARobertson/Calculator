let a = 0;
let b = 0;
let operator = "";
let displayValue = "";
const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

// ADD
function add(a, b) {
  return a + b;
}

// SUBTRACT
function subtract(a, b) {
  return a - b;
}

// MULTIPLY
function multiply(a, b) {
  return a * b;
}

// DIVIDE
function divide(a, b) {
  if (b == 0) {
    return "ERROR: cannot divide by zero";
  }
  return a / b;
}

// OPERATE
function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Invalid Operation";
  }
}

// handling number buttons for display
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    displayValue += button.innerText;
    display.value = displayValue;
  });
});

// handling operators
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerText === "=") {
      b = parseFloat(displayValue);
      displayValue = operate(a, b, operator).toString();
      display.value = displayValue;
      a = parseFloat(displayValue);
      operator = "";
    } else {
      a = parseFloat(displayValue);
      operator = button.innerText;
      displayValue = "";
      display.value = displayValue;
    }
  });
});

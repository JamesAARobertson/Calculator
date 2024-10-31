let a = 0;
let b = 0;
let operator = "";
let displayValue = "";
const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear");

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
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;
    default:
      return "Invalid Operation";
  }
//   round result to 2 decimal places
  if (!Number.isInteger(result)) {
    result = parseFloat(result.toFixed(2))
  }
  return result
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
    const selectedOperator = button.innerText;
// HANDLING "=" FUNCTION
    if (selectedOperator === "=") {
      if (operator && displayValue !== "") {
        b = parseFloat(displayValue);
        displayValue = operate(a, b, operator).toString();
        display.value = displayValue;
        a = parseFloat(displayValue);
        operator = "";
      }
      } else {
        if (operator && displayValue !== "") {
          b = parseFloat(displayValue);
          displayValue = operate(a, b, operator).toString();
          display.value = displayValue;
          a = parseFloat(displayValue);
        } else {
          a = parseFloat(displayValue);
        }
        operator = selectedOperator;
        displayValue = "";
      }
    })
  });

// CLEAR BUTTON
clearButton.addEventListener("click", () => {
  a = 0;
  b = 0;
  operator = "";
  displayValue = "";
  display.value = displayValue;
});

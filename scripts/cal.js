let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let firstOperand = null;

function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

function appendOperator(op) {
  if (currentInput === '' && firstOperand === null) return;

  if (firstOperand !== null) {
    calculate();
  }
  firstOperand = parseFloat(display.value);
  operator = op;
  currentInput = '';
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    display.value = currentInput;
  }
}

function clearDisplay() {
  currentInput = '';
  operator = null;
  firstOperand = null;
  display.value = '';
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput;
}

function calculate() {
  if (operator === null || firstOperand === null || currentInput === '') return;

  const secondOperand = parseFloat(currentInput);
  let result;

  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      if (secondOperand === 0) {
        result = 'Error';
      } else {
        result = firstOperand / secondOperand;
      }
      break;
    default:
      return;
  }

  display.value = result;
  currentInput = String(result);
  operator = null;
  firstOperand = null;
}
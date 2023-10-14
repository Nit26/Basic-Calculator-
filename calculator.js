const display = document.getElementById('abc');
let input = '';
let result = '';

function updateDisplay() {
  display.value = input;
}

// Function to append a number to the input
function appendNumber(number) {
  input += number;
  updateDisplay();
}

// Function to append an operator to the input
function appendOperator(operator) {
  input += operator;
  updateDisplay();
}

// Function to clear the display and input
function clearDisplay() {
  input = '';
  result = '';
  updateDisplay();
}

// Function to calculate the result
function calculateResult() {
  try {
    result = eval(input);
    input = result.toString();
    updateDisplay();
  } catch (error) {
    display.value = 'Error';
  }
}

// Attach click event listeners to buttons
// document.getElementById('clear').addEventListener('click', clearDisplay);
// document.getElementById('equal').addEventListener('click', calculateResult);

// Attach click event listeners to number and operator buttons
// const numberButtons = document.querySelectorAll('.btn:not(.operator)');
// const operatorButtons = document.querySelectorAll('.operator:not(#clear):not(#equal)');

// numberButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     appendNumber(button.textContent);
//   });
// });

// operatorButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     appendOperator(button.textContent);
//   });
// });

let displayValue = '';

function appendValue(value) {
  displayValue += value;
  updateDisplay();
}

function appendOperator(operator) {
  if (displayValue !== '' && !isOperator(displayValue.charAt(displayValue.length - 1))) {
    displayValue += operator;
    updateDisplay();
  }
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Erro';
    updateDisplay();
  }
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function isOperator(char) {
  return ['+', '-', '*', '/'].includes(char);
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

// Basic Calculator Functions

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function power(a, b) {
  return Math.pow(a, b);
}

function squareRoot(a) {
  if (a < 0) {
    return "Error: Cannot calculate square root of negative number";
  }
  return Math.sqrt(a);
}

function percentage(a, b) {
  return (a / 100) * b;
}

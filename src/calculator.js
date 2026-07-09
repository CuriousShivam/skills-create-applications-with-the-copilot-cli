#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
 */

const readline = require('readline');

// Create interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Addition operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtraction operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplication operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Division operation
 * @param {number} a - First number (dividend)
 * @param {number} b - Second number (divisor)
 * @returns {number} Quotient of a divided by b
 * @throws {Error} If divisor is zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Error: Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Perform calculation based on operator
 * @param {number} firstNum - First operand
 * @param {string} operator - Mathematical operator (+, -, *, /)
 * @param {number} secondNum - Second operand
 * @returns {number} Result of the calculation
 */
function calculate(firstNum, operator, secondNum) {
  let result;

  switch (operator) {
    case '+':
      result = add(firstNum, secondNum);
      break;
    case '-':
      result = subtract(firstNum, secondNum);
      break;
    case '*':
      result = multiply(firstNum, secondNum);
      break;
    case '/':
      result = divide(firstNum, secondNum);
      break;
    default:
      throw new Error(`Error: Unknown operator '${operator}'`);
  }

  return result;
}

/**
 * Display calculator menu and handle user interaction
 */
function displayMenu() {
  console.log('\n========================================');
  console.log('       Node.js CLI Calculator');
  console.log('========================================');
  console.log('\nSupported Operations:');
  console.log('  + : Addition');
  console.log('  - : Subtraction');
  console.log('  * : Multiplication');
  console.log('  / : Division');
  console.log('\nType "exit" to quit the calculator');
  console.log('========================================\n');
}

/**
 * Main calculator loop
 */
function main() {
  displayMenu();

  const askForInput = () => {
    rl.question('Enter first number (or "exit" to quit): ', (input1) => {
      if (input1.toLowerCase() === 'exit') {
        console.log('\nThank you for using the Calculator. Goodbye!');
        rl.close();
        return;
      }

      const firstNum = parseFloat(input1);
      if (isNaN(firstNum)) {
        console.log('Invalid input. Please enter a valid number.\n');
        askForInput();
        return;
      }

      rl.question('Enter operator (+, -, *, /): ', (operator) => {
        if (!['+', '-', '*', '/'].includes(operator)) {
          console.log('Invalid operator. Please use +, -, *, or /.\n');
          askForInput();
          return;
        }

        rl.question('Enter second number: ', (input2) => {
          const secondNum = parseFloat(input2);
          if (isNaN(secondNum)) {
            console.log('Invalid input. Please enter a valid number.\n');
            askForInput();
            return;
          }

          try {
            const result = calculate(firstNum, operator, secondNum);
            console.log(`\nResult: ${firstNum} ${operator} ${secondNum} = ${result}\n`);
          } catch (error) {
            console.log(`\n${error.message}\n`);
          }

          askForInput();
        });
      });
    });
  };

  askForInput();
}

// Run the calculator
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, calculate };

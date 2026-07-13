/**
 * Calculator module with basic arithmetic and extended operations
 * Supports: addition, subtraction, multiplication, division, modulo, power, and square root
 */

/**
 * Adds two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function addition(a, b) {
  return a + b;
}

/**
 * Subtracts two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
function subtraction(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiplication(a, b) {
  return a * b;
}

/**
 * Divides two numbers
 * @param {number} a - First number (dividend)
 * @param {number} b - Second number (divisor)
 * @returns {number} Quotient of a divided by b
 * @throws {Error} If divisor is zero
 */
function division(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Returns the remainder of dividing two numbers
 * @param {number} a - First number (dividend)
 * @param {number} b - Second number (divisor)
 * @returns {number} Remainder of a divided by b
 * @throws {Error} If divisor is zero
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

/**
 * Raises a number to a specified power
 * @param {number} base - The base number
 * @param {number} exponent - The power to raise base to
 * @returns {number} base raised to the exponent
 * @throws {Error} If base and exponent are both zero (0^0 is undefined)
 */
function power(base, exponent) {
  if (base === 0 && exponent === 0) {
    throw new Error('0 raised to the power of 0 is undefined');
  }
  return Math.pow(base, exponent);
}

/**
 * Calculates the square root of a number
 * @param {number} n - The number to find the square root of
 * @returns {number} The square root of n
 * @throws {Error} If n is negative
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

// Export all functions
module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot
};

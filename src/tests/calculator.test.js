/**
 * Unit Tests for Calculator Functions
 * Testing all four basic arithmetic operations and edge cases
 */

const { add, subtract, multiply, divide, calculate } = require('../calculator');

describe('Calculator - Addition Function', () => {
  test('should add two positive numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('should add two negative numbers correctly', () => {
    expect(add(-5, -3)).toBe(-8);
  });

  test('should add positive and negative numbers correctly', () => {
    expect(add(10, -4)).toBe(6);
  });

  test('should add zero to a number', () => {
    expect(add(5, 0)).toBe(5);
  });

  test('should add decimal numbers correctly', () => {
    expect(add(2.5, 3.7)).toBeCloseTo(6.2, 5);
  });

  test('should add large numbers correctly', () => {
    expect(add(1000000, 2000000)).toBe(3000000);
  });
});

describe('Calculator - Subtraction Function', () => {
  test('should subtract two positive numbers correctly', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('should subtract negative numbers correctly', () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test('should subtract resulting in negative', () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test('should subtract zero from a number', () => {
    expect(subtract(5, 0)).toBe(5);
  });

  test('should subtract a number from zero', () => {
    expect(subtract(0, 5)).toBe(-5);
  });

  test('should subtract decimal numbers correctly', () => {
    expect(subtract(10.5, 3.2)).toBeCloseTo(7.3, 5);
  });

  test('should subtract large numbers correctly', () => {
    expect(subtract(5000000, 2000000)).toBe(3000000);
  });
});

describe('Calculator - Multiplication Function', () => {
  test('should multiply two positive numbers correctly', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('should multiply two negative numbers correctly', () => {
    expect(multiply(-5, -3)).toBe(15);
  });

  test('should multiply positive and negative numbers correctly', () => {
    expect(multiply(7, -8)).toBe(-56);
  });

  test('should multiply by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });

  test('should multiply by one', () => {
    expect(multiply(42, 1)).toBe(42);
  });

  test('should multiply decimal numbers correctly', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10, 5);
  });

  test('should multiply large numbers correctly', () => {
    expect(multiply(1000, 5000)).toBe(5000000);
  });
});

describe('Calculator - Division Function', () => {
  test('should divide two positive numbers correctly', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('should divide two negative numbers correctly', () => {
    expect(divide(-10, -2)).toBe(5);
  });

  test('should divide positive by negative correctly', () => {
    expect(divide(10, -2)).toBe(-5);
  });

  test('should divide resulting in decimal', () => {
    expect(divide(10, 3)).toBeCloseTo(3.333333, 5);
  });

  test('should divide zero by a number', () => {
    expect(divide(0, 5)).toBe(0);
  });

  test('should divide decimal numbers correctly', () => {
    expect(divide(10.5, 2.5)).toBeCloseTo(4.2, 5);
  });

  test('should divide large numbers correctly', () => {
    expect(divide(1000000, 1000)).toBe(1000);
  });

  test('should throw error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Error: Division by zero is not allowed');
  });

  test('should throw error with zero message when dividing by zero with different operands', () => {
    expect(() => divide(100, 0)).toThrow('Error: Division by zero is not allowed');
  });
});

describe('Calculator - Calculate Function (Combined Operations)', () => {
  test('should perform addition using calculate function', () => {
    expect(calculate(2, '+', 3)).toBe(5);
  });

  test('should perform subtraction using calculate function', () => {
    expect(calculate(10, '-', 4)).toBe(6);
  });

  test('should perform multiplication using calculate function', () => {
    expect(calculate(45, '*', 2)).toBe(90);
  });

  test('should perform division using calculate function', () => {
    expect(calculate(20, '/', 5)).toBe(4);
  });

  test('should throw error for invalid operator', () => {
    expect(() => calculate(10, '%', 5)).toThrow('Error: Unknown operator \'%\'');
  });

  test('should throw error for division by zero in calculate', () => {
    expect(() => calculate(20, '/', 0)).toThrow('Error: Division by zero is not allowed');
  });
});

describe('Calculator - Edge Cases and Special Scenarios', () => {
  test('should handle very small decimal numbers', () => {
    expect(add(0.0001, 0.0002)).toBeCloseTo(0.0003, 5);
  });

  test('should handle operations resulting in very large numbers', () => {
    expect(multiply(999999, 999999)).toBe(999998000001);
  });

  test('should handle chained operations', () => {
    const result1 = add(5, 3); // 8
    const result2 = multiply(result1, 2); // 16
    const result3 = divide(result2, 4); // 4
    expect(result3).toBe(4);
  });

  test('should handle negative zero correctly', () => {
    expect(subtract(5, 5)).toBe(0);
  });

  test('should handle operations with same operands', () => {
    expect(divide(10, 10)).toBe(1);
    expect(subtract(10, 10)).toBe(0);
    expect(multiply(10, 10)).toBe(100);
  });
});

describe('Calculator - Images Test Cases', () => {
  test('should pass test case from image: 2 + 3 = 5', () => {
    expect(calculate(2, '+', 3)).toBe(5);
  });

  test('should pass test case from image: 10 - 4 = 6', () => {
    expect(calculate(10, '-', 4)).toBe(6);
  });

  test('should pass test case from image: 45 * 2 = 90', () => {
    expect(calculate(45, '*', 2)).toBe(90);
  });

  test('should pass test case from image: 20 / 5 = 4', () => {
    expect(calculate(20, '/', 5)).toBe(4);
  });
});

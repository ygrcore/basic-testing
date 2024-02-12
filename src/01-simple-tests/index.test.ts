// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  const num1 = 6;
  const num2 = 3;
  test('should add two numbers', () => {
    const action = Action.Add;

    const result = simpleCalculator({
      a: num1,
      b: num2,
      action: action,
    })

    expect(result).toBe(9);
  });

  test('should subtract two numbers', () => {
    const action = Action.Subtract;

    const result = simpleCalculator({
      a: num1,
      b: num2,
      action: action,
    })

    expect(result).toBe(3);
  });

  test('should multiply two numbers', () => {
    const action = Action.Multiply;

    const result = simpleCalculator({
      a: num1,
      b: num2,
      action: action,
    })

    expect(result).toBe(18);
  });

  test('should divide two numbers', () => {
    const action = Action.Divide;

    const result = simpleCalculator({
      a: num1,
      b: num2,
      action: action,
    })

    expect(result).toBe(2);
  });

  test('should exponentiate two numbers', () => {
    const num1 = 6;
    const num2 = 3;
    const action = Action.Exponentiate;

    const result = simpleCalculator({
      a: num1,
      b: num2,
      action: action,
    })

    expect(result).toBe(216);
  });

  test('should return null for invalid action', () => {
    const num1 = 6;
    const num2 = 3;
    const action = '';

    const result = simpleCalculator({
      a: num1,
      b: num2,
      action: action,
    })

    expect(result).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    const num1 = 'six';
    const num2 = 'three';
    const action = Action.Add;

    const result = simpleCalculator({
      a: num1,
      b: num2,
      action: action,
    })

    expect(result).toBe(null);
  });
});

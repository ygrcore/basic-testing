import {simpleCalculator, Action } from './index';

const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
    { a: 4, b: 2, action: Action.Subtract, expected: 2 },
    { a: 5, b: 2, action: Action.Divide, expected: 2.5 },
    { a: 6, b: 2, action: Action.Multiply, expected: 12 },
    { a: 7, b: 2, action: Action.Exponentiate, expected: 49 },
    { a: 7, b: 2, action: '', expected: null },
    { a: 'seven', b: 'two', action: Action.Exponentiate, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'Jest table tests API to test all cases',
    ({a, b, action, expected}) => {
      const result = simpleCalculator({a, b, action});
      expect(result).toBe(expected);
    }
  )
});

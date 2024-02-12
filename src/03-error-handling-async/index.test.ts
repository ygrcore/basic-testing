import { throwError, throwCustomError, resolveValue, MyAwesomeError, rejectCustomError } from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const resolveMessage = 'Completed';
    const resolvedValue = await resolveValue(resolveMessage);
    expect(resolvedValue).toBe(resolveMessage);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const providedMessage = 'Some error has occurred';
    expect(() => throwError(providedMessage)).toThrowError(providedMessage);
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => throwError()).toThrowError('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrowError(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrowError(MyAwesomeError);
  });
});

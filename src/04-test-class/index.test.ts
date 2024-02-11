// Uncomment the code below and write your tests
import { getBankAccount, InsufficientFundsError, TransferFailedError, SynchronizationFailedError } from '.';

describe('BankAccount', () => {
  const initialBalance = 10000;
  const newAccount = getBankAccount(initialBalance);
  const newAccount2 = getBankAccount(initialBalance);
  test('should create account with initial balance', () => {
    expect(newAccount).toBeTruthy();
    expect(newAccount.getBalance()).toBe(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const amount = 10001;

    expect(() => newAccount.withdraw(amount)).toThrowError(
      InsufficientFundsError
    );
  });

  test('should throw error when transferring more than balance', () => {
    const amount = 10001;

    expect(() => newAccount.transfer(amount, newAccount2)).toThrowError(
      InsufficientFundsError
    );
  });

  test('should throw error when transferring to the same account', () => {
    const amount = 10000;

    expect(() => newAccount.transfer(amount, newAccount)).toThrowError(
      TransferFailedError
    );
  });

  test('should deposit money', () => {
    newAccount.deposit(initialBalance);
    expect(newAccount.getBalance()).toBe(initialBalance*2);
  });

  test('should withdraw money', () => {
    newAccount.withdraw(initialBalance);
    expect(newAccount.getBalance()).toBe(initialBalance);
  });

  test('should transfer money', () => {
    const amount = 10000;
    newAccount.transfer(amount, newAccount2);
    expect(newAccount.getBalance()).toBe(0);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const balance = await newAccount2.fetchBalance();

    expect(typeof balance).toBe('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const newBalance = 15000;
    jest.spyOn(newAccount, 'fetchBalance').mockResolvedValueOnce(newBalance);

    await newAccount.synchronizeBalance();

    expect(newAccount.getBalance()).toBe(newBalance);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    jest.spyOn(newAccount, 'fetchBalance').mockResolvedValueOnce(null);

    await expect(newAccount.synchronizeBalance()).rejects.toThrowError(
      SynchronizationFailedError
    );
  });
});

import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  const array = [1, 2, 3];
  const linkedList = {
    value: 1,
    next: { value: 2, next: { value: 3, next: { value: null, next: null } } },
  };

  const result = generateLinkedList(array);

  test('should generate linked list from values 1', () => {
    expect(result).toStrictEqual(linkedList);
  });

  test('should generate linked list from values 2', () => {
    expect(result).toMatchSnapshot();
  });
});

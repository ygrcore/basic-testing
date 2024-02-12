import axios, {AxiosInstance} from 'axios';
import { throttledGetDataFromApi } from './index';

describe('throttledGetDataFromApi', () => {

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async () => {
    const axiosSpy = jest.spyOn(axios, 'create');

    await throttledGetDataFromApi('posts');

    jest.runAllTimers();

    expect(axiosSpy).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });

  });

  test('should perform request to correct provided url', async () => {
    const axiosSpy = jest.spyOn(axios, 'create');

    axiosSpy.mockReturnValue({
      get: jest.fn().mockReturnValue({ data: 'data' }),
    } as unknown as AxiosInstance);

    await throttledGetDataFromApi('posts');

    jest.runAllTimers();

    expect(axiosSpy).toHaveBeenCalled();
  });

  test('should return response data', async () => {

    jest.spyOn(axios, 'create').mockReturnValue({
      get: jest.fn().mockReturnValue({ data: 'data' }),
    } as unknown as AxiosInstance);

    const result = await throttledGetDataFromApi('post');

    jest.runAllTimers();

    expect(result).toEqual('data');
  });
});

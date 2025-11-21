import axios from 'axios';
import axiosFetch from '../axiosFetch';

jest.mock('axios');

const mockedAxios = axios as jest.MockedFunction<typeof axios>;

describe('axiosFetch helper', () => {
  const token = 'test-token';
  const authError = {
    msg: 'Authentication error. Please try logging in again.',
    error: true,
  };

  beforeEach(() => {
    localStorage.clear();
    mockedAxios.mockReset();
  });

  it('short-circuits with auth error when no token exists', async () => {
    const [data, error] = await axiosFetch('get', '/api/houses');

    expect(data).toBeNull();
    expect(error).toEqual(authError);
    expect(mockedAxios).not.toHaveBeenCalled();
  });

  it('returns axios response when request succeeds', async () => {
    localStorage.setItem('token', token);
    const response = { data: { ok: true } } as any;
    mockedAxios.mockResolvedValueOnce(response);

    const [data, error] = await axiosFetch('post', '/api/houses', {
      name: 'Test',
    });

    expect(mockedAxios).toHaveBeenCalledWith({
      method: 'post',
      headers: { Authorization: token },
      url: '/api/houses',
      data: { name: 'Test' },
    });
    expect(data).toBe(response);
    expect(error).toEqual({ msg: '', error: false });
  });

  it('returns error tuple when axios rejects', async () => {
    localStorage.setItem('token', token);
    mockedAxios.mockRejectedValueOnce(new Error('network down'));
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    const [data, error] = await axiosFetch('delete', '/api/houses/1');

    expect(data).toBeNull();
    expect(error).toEqual({ msg: 'Error fetching!', error: true });
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});

import 'jest';
import { errorHandler } from '../../src/middleware/errorHandler';
import { ResponseMock } from '../helpers';

describe('errorHandler middleware', () => {
  let res: ResponseMock;

  beforeEach(() => {
    process.env.NODE_ENV = 'test';
    res = new ResponseMock();
  });

  test('returns 404 response with generic not-found message', () => {
    const err: any = { statusCode: 404 };

    errorHandler(err, {} as any, res as any, jest.fn());

    expect(res.statusValue).toBe(404);
    expect(res.jsonValue).toEqual({
      message: 'The requested information could not be found',
    });
  });

  test('overrides 401 error message to stripe warning', () => {
    const err: any = { statusCode: 401, message: 'Original message' };

    errorHandler(err, {} as any, res as any, jest.fn());

    expect(res.statusValue).toBe(401);
    expect(res.jsonValue).toEqual({
      message: 'Please connect your stripe account before processing payments!',
    });
    expect(err.message).toBe(
      'Please connect your stripe account before processing payments!',
    );
  });

  test('falls back to 500 for unknown error status', () => {
    const err: any = { message: 'Unexpected boom' };

    errorHandler(err, {} as any, res as any, jest.fn());

    expect(res.statusValue).toBe(500);
    expect(res.jsonValue).toEqual({
      message: 'There was an error performing the specified operation',
    });
  });
});

import 'jest';
import jwt from 'jsonwebtoken';
import verifyToken from '../../src/middleware/verifyToken';

describe('verifyToken middleware', () => {
  const secret = 'test-secret';

  beforeEach(() => {
    process.env.JWT_SECRET = secret;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const createReq = (authorization?: string) =>
    ({
      headers: authorization ? { authorization } : {},
    } as any);

  test('calls next with 403 when authorization header is missing', () => {
    const req = createReq();
    const next = jest.fn();

    verifyToken(req, {} as any, next);

    expect(next).toHaveBeenCalledTimes(1);
    const errorArg = next.mock.calls[0][0];
    expect(errorArg.statusCode).toBe(403);
    expect(errorArg.message).toBe('Token required to access protected route');
  });

  test('calls next with 403 when token verification fails', () => {
    const req = createReq('invalid-token');
    const next = jest.fn();

    jest.spyOn(jwt, 'verify').mockImplementation(() => {
      throw new Error('invalid token');
    });

    verifyToken(req, {} as any, next);

    const errorArg = next.mock.calls[0][0];
    expect(errorArg.statusCode).toBe(403);
    expect(errorArg.message).toBe('invalid token');
  });

  test('attaches decoded token to request and calls next with no args', () => {
    const payload = { id: 7, name: 'Verifier' };
    const token = jwt.sign(payload, secret);
    const req = createReq(token);
    const next = jest.fn();

    verifyToken(req, {} as any, next);

    expect(req.token).toMatchObject(payload);
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith();
  });
});

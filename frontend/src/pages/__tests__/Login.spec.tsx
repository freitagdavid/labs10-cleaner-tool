import React from 'react';
import { cleanup, wait } from 'react-testing-library';
import { renderWithRouter } from '../../helpers/functions';
import Login from '../Login';
import 'jest';
import {UserContextProvider} from '../../UserContext';

jest.mock('firebase/app', () => ({
  __esModule: true,
  default: {
    auth: {
      GoogleAuthProvider: { PROVIDER_ID: 'google' },
      FacebookAuthProvider: { PROVIDER_ID: 'facebook' },
      TwitterAuthProvider: { PROVIDER_ID: 'twitter' },
      GithubAuthProvider: { PROVIDER_ID: 'github' },
      EmailAuthProvider: { PROVIDER_ID: 'email' },
      PhoneAuthProvider: { PROVIDER_ID: 'phone' },
    },
  },
}));

jest.mock('../../firebase.setup', () => {
  const unsubscribe = jest.fn();
  const auth = jest.fn(() => ({
    onAuthStateChanged: jest.fn(() => unsubscribe),
  }));

  return {
    __esModule: true,
    default: { auth },
  };
});

jest.mock('react-firebaseui/StyledFirebaseAuth', () => () => {
  return (
    <div>
      <button />
      <button />
      <button />
      <button />
      <button />
    </div>
  );
});

const props: any = {
  location: { search: 'code=34134123dsfasfdads' },
  history: { push: jest.fn() },
  match: {},
};

afterEach(cleanup);

describe('Login component', () => {
  test('should render the login component displaying a button for every OAuth provider', async () => {
    const { container } = renderWithRouter(<UserContextProvider><Login {...props} /></UserContextProvider>, {});
    const buttons = container.querySelectorAll('button');
    const button = document.createElement('button');
    await wait(() => {
      expect(buttons.length).toBe(5);
      expect(buttons[0]).toMatchObject(button);
    });
  });
});

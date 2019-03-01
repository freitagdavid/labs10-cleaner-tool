import React, { createContext, useReducer } from 'react';

const UserContext = createContext({});

const initialState = {
  loggedIn: localStorage.getItem('token') || false,
  role: localStorage.getItem('role') || 'none',
  subscription: localStorage.getItem('subscription') || 0,
  connected: localStorage.getItem('connected') || false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setLogin':
      return { ...state, loggedIn: !state.loggedIn };
    case 'setRole':
      return { ...state, role: action.payload };
    case 'setSubscription':
      return { ...state, subscription: action.payload };
    case 'connected':
      return { ...state, connected: !state.loggedIn };
    default:
      return state;
  }
};
const UserContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const user = { state, dispatch };

  return (
    <UserContext.Provider user={user}>{props.children}</UserContext.Provider>
  );
};

const UserContextConsumer = UserContext.Consumer;
const state = UserContext;

export { state, UserContextProvider, UserContextConsumer };

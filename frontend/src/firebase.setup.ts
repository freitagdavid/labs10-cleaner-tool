import firebase from 'firebase/app';
import 'firebase/auth';

const {
  REACT_APP_apiKey,
  REACT_APP_authDomain,
  REACT_APP_databaseURL,
  REACT_APP_projectId,
  REACT_APP_storageBucket,
  REACT_APP_messagingSenderId,
} = process.env;

const app = firebase.initializeApp({
  apiKey: REACT_APP_apiKey,
  authDomain: REACT_APP_authDomain,
  databaseURL: REACT_APP_databaseURL,
  messagingSenderId: REACT_APP_messagingSenderId,
  projectId: REACT_APP_projectId,
  storageBucket: REACT_APP_storageBucket,
});
console.log(process.env.REACT_APP_apiKey, 'key')
export default app;

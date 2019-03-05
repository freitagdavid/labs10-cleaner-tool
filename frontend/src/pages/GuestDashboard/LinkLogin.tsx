import React, {
  useEffect,
  useContext,
  useRef,
  MutableRefObject,
  FunctionComponent,
  useState,
} from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router';
import firebase, { Unsubscribe, User } from 'firebase';
import app from '../../firebase.setup';
import { UserContext } from '../../UserContext';
const backendURL = process.env.REACT_APP_backendURL;

interface LoginProps extends RouteComponentProps {
  onUser: any;
  match: any;
}

const LinkLogin: FunctionComponent<LoginProps> = ({
  history,
  location,
  match,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const { state, dispatch } = useContext(UserContext);
  const observer: MutableRefObject<any> = useRef<Unsubscribe>(null);

  useEffect(() => {
    observer.current = app
      .auth()
      .onAuthStateChanged((newUser) => setUser(newUser));
    return () => {
      if (observer.current !== null) {
        observer.current();
      }
    };
  }, []);

  useEffect(() => {
    submitUser();
  }, [user]);

  useEffect(() => {
    if (app.auth().isSignInWithEmailLink(window.location.href)) {
      let email: any;
      email = localStorage.getItem('emailForSignIn');
      if (!email) {
        email = window.prompt(
          'Please provide your email to see your dashboard',
        );
      }
      app
        .auth()
        .signInWithEmailLink(email, window.location.href)
        .then((result) => {
          window.localStorage.removeItem('emailForSignIn');
        })
        .catch((error) => {
          throw error;
        });
    }
  }, []);

  async function submitUser() {
    if (user !== null) {
      const { email, uid, displayName, photoURL } = user;
      const nUser = {
        email,
        ext_it: uid,
        full_name: displayName,
        photoUrl: photoURL,
        role: 'guest',
      };
      const url =
        process.env.REACT_APP_backendURL ||
        'https://labs10-cleaner-app-2.herokuapp.com';
      try {
        const { data } = await axios.post(`${url}/users/`, nUser);
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
        localStorage.setItem('subscription', data.stripePlan);
        history.push(`/guestdashboard/${match.params.id}`);
      } catch (e) {
        throw e;
      }
    }
  }

  return <div>Place holder</div>;
};

export default LinkLogin;

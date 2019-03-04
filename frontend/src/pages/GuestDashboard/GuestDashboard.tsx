import React, { useEffect } from 'react';
import GuestInfo from './GuestInfo';
import useFetch from '../../helpers/useFetch';
import GuestProgressBar from './GuestProgressBar';
import MiscInfo from './MiscInfo';
import styled from '@emotion/styled';
import firebase from 'firebase';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

const backendURL = process.env.REACT_APP_backendURL;

const StyledGuestDashboard = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 780px) {
    border: 1px solid red;
  }
`;

const GuestDashboard = (props: any) => {
  // const setUpUrlAndHeaders = () => {
  //   /*
  //   Sets default URL, loads/checks token, and sets header
  //   Returns url and header as an array in said order
  //   */
  //   // TODO: Refactor to take advantage of Context API handling user info
  //   const url =
  //     process.env.REACT_APP_backendURL ||
  //     'https://labs10-cleaner-app-2.herokuapp.com';
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     throw new Error('Not authenticated');
  //   }
  //   const headers: AxiosRequestConfig = {
  //     headers: {
  //       Authorization: token,
  //     },
  //   };
  //   return { url, headers };
  // };

  useEffect(() => {
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      let email: any;
      email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        email = window.prompt(
          'Please provide your email to see your dashboard',
        );
      }
      firebase
        .auth()
        .signInWithEmailLink(email, window.location.href)
        .then((result) => {
          window.localStorage.removeItem('emailForSignIn');
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  // @ts-ignore
  const [fetchData, fetchErr, fetchLoading] = useFetch(
    `http://${backendURL}/guestdata/${props.match.params.id}`,
    true,
    'get',
  );
  if (fetchErr) {
    console.log(fetchErr);
  }
  if (fetchLoading === true) {
    console.log(props.match);
    return <h1>Loading</h1>;
  } else {
    console.log(fetchData);
    const user = fetchData.results[0];
    console.log(user);
    return (
      <StyledGuestDashboard>
        <GuestInfo
          name={`${user.name.first} ${user.name.last}`}
          picture={user.picture.large}
          houseLink='http://example.com'
          houseName='whatever'
          checkIn='1/27'
          checkOut='1/28'
        />
        <GuestProgressBar previousCheckout={true} currentProgress={50} />
        <MiscInfo />
      </StyledGuestDashboard>
    );
  }
};

export default GuestDashboard;

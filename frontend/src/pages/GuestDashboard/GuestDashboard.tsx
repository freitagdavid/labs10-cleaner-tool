import React, {
  useEffect,
  useContext,
  useRef,
  MutableRefObject,
  useState,
} from 'react';
import axios from 'axios';
import GuestInfo from './GuestInfo';
import useFetch from '../../helpers/useFetch';
import GuestProgressBar from './GuestProgressBar';
import MiscInfo from './MiscInfo';
import styled from '@emotion/styled';
import firebase, { Unsubscribe, User } from 'firebase';
import { UserContext } from '../../UserContext';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import app from '../../firebase.setup';
import { Properties } from '..';

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
  const { state, dispatch } = useContext(UserContext);
  const [fetchData, setFetchData] = useState([])
  const setRole = (role: string) =>
    dispatch({ type: 'setRole', payload: role });
  useEffect(() => {
    (async () => {
      const response = await axios.get(`${backendURL}/gueststay/${props.match.params.id}`)
      setFetchData(response.data)
      
    })()
  }, []);
  // if (fetchErr) {
  //   throw fetchErr;
  // }
  // if (fetchLoading === true) {
  //   return (
  //     <div>
  //       <img src='../utils/Loading.svg' />
  //     </div>
  //   );
  // } else {
    // const user = fetchData
    // console.log(user);
  console.log(fetchData)
    return (
      <StyledGuestDashboard>
        <GuestInfo
        //@ts-ignore
          name={`${fetchData.guest_name}`}
          //@ts-ignore
          picture={fetchData.photo_url}
          houseLink='http://example.com'
          //@ts-ignore
          houseName={fetchData.house_name}
          //@ts-ignore
          checkIn={fetchData.check_in}
          //@ts-ignore
          checkOut={fetchData.check_out}
        />
        <GuestProgressBar previousCheckout={true} currentProgress={50} />
        <MiscInfo id = {props.match.params.id} />
      </StyledGuestDashboard>
    );
  }


export default GuestDashboard;

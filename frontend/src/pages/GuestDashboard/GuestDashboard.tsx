import React from 'react';
import GuestInfo from './GuestInfo';
import useFetch from '../../helpers/useFetch';
import GuestProgressBar from './GuestProgressBar';
import MiscInfo from './MiscInfo';
import styled from '@emotion/styled';
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
  console.log(props.match);
  const [fetchData, fetchErr, fetchLoading] = useFetch(
    `${backendURL}/gueststay/${props.match.params.id}`,
    true,
    'get',
  );
  if (fetchErr.error === true) {
    console.log(fetchErr);
    throw fetchErr;
  }
  if (fetchLoading === true) {
    console.log('loading');
    return (
      <div>
        <img src='../utils/loading.svg' />
      </div>
    );
  } else {
    // const user = fetchData
    // console.log(user);
    return (
      <StyledGuestDashboard>
        <GuestInfo
          name={`${fetchData.guest_name}`}
          picture={fetchData.photo_url}
          houseLink='http://example.com'
          houseName={fetchData.house_name}
          checkIn={fetchData.check_in}
          checkOut={fetchData.check_out}
        />
        <GuestProgressBar previousCheckout={true} currentProgress={50} />
        <MiscInfo id = {props.match.params.id} />
      </StyledGuestDashboard>
    );
  }
};

export default GuestDashboard;

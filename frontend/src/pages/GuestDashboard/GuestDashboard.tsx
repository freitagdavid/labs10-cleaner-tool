import React from 'react';
import GuestInfo from './GuestInfo';
import useFetch from '../../helpers/useFetch';
import GuestProgressBar from './GuestProgressBar';
import MiscInfo from './MiscInfo';
import { StyledGuestDashboard } from './GuestDash.styling'

const backendURL = process.env.REACT_APP_backendURL;



const GuestDashboard = (props: any) => {
  console.log(props.match);
  const [fetchData, fetchErr, fetchLoading] = useFetch(
    `${backendURL}/gueststay/${props.match.params.id}`,
    true,
    'get',
  );
  console.log(fetchData)
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
        <h1>Your House Progress</h1>
        <GuestInfo
          name={`${fetchData.guest_name}`}
          picture={fetchData.photo_url}
          houseLink='http://example.com'
          houseName={fetchData.house_name}
          checkIn={fetchData.check_in}
          checkOut={fetchData.check_out}
        />
        <GuestProgressBar previousCheckout={true} currentProgress={50} />
        <MiscInfo />
      </StyledGuestDashboard>
    );
  }
};

export default GuestDashboard;

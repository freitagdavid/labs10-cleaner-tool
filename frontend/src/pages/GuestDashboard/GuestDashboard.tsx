import React from 'react';
import GuestInfo from './GuestInfo';
import useFetch from '../../helpers/useFetch';
import GuestProgressBar from './GuestProgressBar';
import MiscInfo from './MiscInfo';
import styled from '@emotion/styled';

const StyledGuestDashboard = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const GuestDashboard = () => {
  const [fetchData, fetchErr, fetchLoading] = useFetch(
    'https://randomuser.me/api',
    true,
    'get',
  );
  if (fetchLoading === true) {
    return <h1>Loading</h1>;
  }
  {
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

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

const timeObject = (dateTime: string) => {
  const re = /(\d\d\d\d)-(\d\d)-(\d\d)T(\d\d)\:(\d\d)\:(\d\d)\.(\d\d\d)Z/i;
  // Run regex on the passed in dateTime to split it into seperate date/time items
  const date = dateTime.match(re);
  // Convert the data to integers to make TS shutup
  let integerified = new Array<number>(8);
  integerified = date!.map((i) => parseInt(i, 10));
  // Remove first result since it's a duplicate of the second
  let cruftRemoved = Array<number>(7);
  cruftRemoved = [...integerified].slice(1, 7);
  // @ts-ignore
  return new Date(...cruftRemoved);
};

const formatDate = (dateTime: Date) => {
  return `${dateTime.getDay()}/${dateTime.getMonth()}/${dateTime.getFullYear()}`;
};

const handleDate = (dateTime: string) => {
  const dateObj = timeObject(dateTime);
  return formatDate(dateObj);
};

const GuestDashboard = (props: any) => {
  console.log(props.match);
  const [fetchData, fetchErr, fetchLoading] = useFetch(
    `${backendURL}/gueststay/${props.match.params.id}`,
    true,
    'get',
  );
  if (fetchErr.error === true) {
    throw fetchErr;
  }
  if (fetchLoading === true) {
    return (
      <div>
        <img src='../utils/loading.svg' />
      </div>
    );
  } else {
    console.log(timeObject(fetchData.check_in));

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
        <GuestProgressBar tasks={fetchData.checklist} />
        <MiscInfo />
      </StyledGuestDashboard>
    );
  }
};

export default GuestDashboard;

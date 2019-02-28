import React, { ComponentClass } from 'react';
import styled from '@emotion/styled';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

interface guestInfoProps {
  name: string;
  picture: string;
  houseLink: string;
  houseName: string;
  checkIn: string;
  checkOut: string;
}

const GuestInfo = (props: guestInfoProps) => {
  const { name, picture, houseLink, houseName, checkIn, checkOut } = props;
  return (
    <StyledGuestInfo>
      <img src={picture} alt={`Picture of ${name}`} />
      <h3>{name}</h3>
      <a href={houseLink}>{`Staying: ${houseName}`}</a>
      <div>
        <p>Check-in</p>
        <p>{checkIn}</p>
      </div>
      <div>
        <p>Check-out</p>
        <p>{checkOut}</p>
      </div>
    </StyledGuestInfo>
  );
};

const StyledGuestInfo = styled.div`
  border: 1px solid black;
  display: grid;
  grid-template-columns: 0.7fr 1fr 1fr 1fr 4fr;
  grid-template-rows: 50px 50px;
  grid-template-areas:
    'userImg userName checkIn checkOut .'
    'userImg houseName checkIn checkOut .';
  img {
    grid-area: userImg;
    justify-self: center;
    align-self: center;
    height: 80%;
    width: auto;
  }
  h3 {
    font-size: 1.2rem;
    grid-area: userName;
    align-self: center;
    height: 40%;
  }
  a {
    grid-area: houseName;
    align-self: center;
    height: 40%;
  }
  div:first-of-type {
    grid-area: checkIn;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80%;
  }
  div:last-of-type {
    grid-area: checkOut;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80%;
  }
`;

export default GuestInfo;

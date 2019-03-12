import React, { ComponentClass } from 'react';
import styled from '@emotion/styled';
import { generateDisplayDate } from '../utils';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { InfoDiv } from '../Guests/Guests.styling';
import { GuestInfoWrapper, CheckIn } from './GuestDash.styling';
interface GuestInfoProps {
  name: string;
  picture: string;
  houseLink: string;
  houseName: string;
  checkIn: string;
  checkOut: string;
}

const GuestInfo = (props: GuestInfoProps) => {
  const { name, picture, houseLink, houseName, checkIn, checkOut } = props;
  return (
    <GuestInfoWrapper>
      <div className='guest-info'>
        <img src={picture} alt={`Picture of ${name}`} />
        <div>
          <h3>{name}</h3>
          <a href='#'>{`Staying: ${houseName}`}</a>
        </div>
      </div>
      <CheckIn>
        <div className='check-in'>
          <div className='in'>Check-in</div>
          <div className='date'>{generateDisplayDate(checkIn)}</div>
        </div>
        <div className='check-in'>
          <div className='in'>Check-out</div>
          <div className='date'>{generateDisplayDate(checkOut)}</div>
        </div>
      </CheckIn>
    </GuestInfoWrapper>
  );
};

// const StyledGuestInfo = styled.div`
//   border: 1px solid black;
//   display: grid;
//   grid-template-columns: 0.7fr 1fr 1fr 1fr 4fr;
//   grid-template-rows: 50px 50px;
//   grid-template-areas:
//     'userImg userName checkIn checkOut .'
//     'userImg houseName checkIn checkOut .';
//   img {
//     grid-area: userImg;
//     justify-self: center;
//     align-self: center;
//     height: 80%;
//     width: auto;
//   }
//   h3 {
//     font-size: 1.2rem;
//     grid-area: userName;
//     align-self: center;
//     height: 40%;
//   }
//   a {
//     grid-area: houseName;
//     align-self: center;
//     height: 40%;
//   }
//   div:first-of-type {
//     grid-area: checkIn;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     height: 80%;
//     margin-left: 20px;
//     border: 1px solid green;
//   }
//   div:last-of-type {
//     grid-area: checkOut;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     height: 80%;
//     border: 1px solid black;
//   }
// `;

export default GuestInfo;

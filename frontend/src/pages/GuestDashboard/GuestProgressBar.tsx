// @ts-nocheck
import React from 'react';
import styled from '@emotion/styled';
interface ProgressBar {
  previousCheckout: boolean;
  currentProgress: number;
}

const StyledGuestProgressBar = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  grid-template-areas:
    'lable1 label2 label3'
    'previous current overall';
    // p{
    //   border: 1px solid red;
    // }
  span:nth-child(4) {
    height: 50px;
    border: 1px solid red;
    background-color: #65BAE6;
    background: linear-gradient(
      to right,
      blue
        ${(props: {
          previousCheckout: boolean;
          currentProgress: number;
          overallProgress: number;
        }) => (props.previousCheckout ? '100%' : '0%')},
      #00000000 ${(props) => (props.previousCheckout ? '0%' : '100%')}
    );
  }
  span:nth-child(5) {
    border: 1px solid red;

    background: linear-gradient(
      to right,
      blue ${(props) => props.currentProgress}%,
      #00000000 ${(props) => 100 - props.currentProgress}%
    );
  }
  span:nth-child(6) {
    border: 1px solid red;

    background: ${(props) =>
      props.overallProgress === 100 ? 'green' : '#00000000'};
  }
`;

const GuestProgressBar = (props: ProgressBar) => {
  const { previousCheckout, currentProgress } = props;
  const overallProgress = previousCheckout
    ? currentProgress + 10
    : currentProgress - 10;
  return (
    // @ts-ignore
    <StyledGuestProgressBar
      previousCheckout={previousCheckout}
      currentProgress={currentProgress}
      overallProgress={overallProgress}
    >
      <p>Previous Guest Checkout</p>
      <p>Getting Ready for you</p>
      <p>Overall</p>
      <span>{previousCheckout ? '100' : '0'}%</span>
      <span>{currentProgress}%</span>
      <span>{overallProgress}%</span>
    </StyledGuestProgressBar>
  );
};

export default GuestProgressBar;

// @ts-nocheck
import React from 'react';
import styled from '@emotion/styled';
interface ProgressBar {
  tasks: {
    before: TaskList;
    during: TaskList;
    after: any;
  };
}

interface GuestDashInfo {
  guest_id: number;
  guest_name: string;
  email: string;
  phone: number;
  address: string;
  house_id: number;
  house_name: string;
  photo_url: string;
  house_address: string;
  default_ast: number;
  guest_guide: string;
  ast_guide: string;
  price: number;
  extra_fee: number;
  cleaning_fee: number;
  extra_guests: number;
  stay_receipt: string;
  stay_id: number;
  check_in: string;
  checkout: string;
  diff: number;
  checklist: {
    before: TaskList;
    during: TaskList;
    after: afterList;
  };
}

type afterList = [
  {
    [key: string]: TaskList;
  }
];

type TaskList = [Task];

interface Task {
  complete: number;
  task: string;
  items_id: number;
  stay_id: number;
}

const StyledGuestProgressBar = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  grid-template-rows: auto auto 30px;
  grid-auto-flow: column;
  grid-template-areas:
    'lable1 label2 label3'
    'previous current overall';
  align-items: stretch;
  justify-content: stretch;
  /* span:nth-child(4) {
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
  } */
  /* span:nth-child(5) {
    background: linear-gradient(
      to right,
      blue ${(props) => props.currentProgress}%,
      #00000000 ${(props) => 100 - props.currentProgress}%
    );
  } */
  /* span:nth-child(6) {
    background: ${(props) =>
      props.overallProgress === 100 ? 'green' : '#00000000'};
  } */
`;

const StyledLi = styled.li`
  border: solid 1px black;
  flex: 1;
  background: ${(props: { complete: number }) =>
    props.complete === 1 ? 'blue' : 'red'};
`;

const TrackerChunk = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
`;

const FinalTrackerChunk = styled.span`
  border: solid 1px black;
  flex: 1;
  background: ${(props: { complete: boolean }) =>
    props.complete ? 'blue' : 'red'};
  }
`;

const GuestProgressBar = (props: ProgressBar) => {
  const { before, during, after } = props.tasks;
  const beforeProgress =
    (before.filter((task: Task) => task.complete === 1).length /
      before.length) *
    100;
  const duringProgress =
    (during.filter((task: Task) => task.complete === 1).length /
      before.length) *
    100;
  const overallProgress = beforeProgress + duringProgress;
  console.log(beforeProgress);
  console.log(duringProgress);
  console.log(overallProgress);
  return (
    // @ts-ignore
    <StyledGuestProgressBar>
      <p>Previous Guest Checkout</p>
      <span>{beforeProgress}%</span>
      <TrackerChunk>
        {before.map((item: Task) => {
          return <StyledLi complete={item.complete} />;
        })}
      </TrackerChunk>
      <p>Getting Ready for you</p>
      <span>{duringProgress}%</span>
      <TrackerChunk>
        {during.map((item: Task) => {
          return <StyledLi complete={item.complete} />;
        })}
      </TrackerChunk>
      <p>Overall</p>
      <span>{overallProgress}%</span>
      <FinalTrackerChunk complete={overallProgress === 100 ? true : false} />
    </StyledGuestProgressBar>
  );
};

export default GuestProgressBar;

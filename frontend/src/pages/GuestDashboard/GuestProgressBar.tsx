// @ts-nocheck
import React from 'react';
import {
  StyledGuestProgressBar,
  TrackerChunk,
  FinalTrackerChunk,
  StyledLi,
} from './GuestProgressBar.styling';
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

const GuestProgressBar = (props: ProgressBar) => {
  const { before, during, after } = props.tasks;
  console.log(before, 'Before mutation');
  const beforeProgress = Math.floor(
    (before.filter((task: Task) => task.complete === 1).length /
      before.length) *
      100,
  );
  const duringProgress = Math.floor(
    (during.filter((task: Task) => task.complete === 1).length /
      before.length) *
      100,
  );

  // prettier-ignore
  const overallProgress = Math.floor((20 * (beforeProgress / 100)) - (80 * (duringProgress / 100)));
  const reducer = (a: Task, b: Task) => {
    if (a.complete > b.complete) {
      return -1;
    }
    if (b.complete > a.complete) {
      return 1;
    }
    return 0;
  };

  const beforeOutput = [...before].sort(reducer);
  const duringOutput = [...during].sort(reducer);

  return (
    // @ts-ignore
    <StyledGuestProgressBar>
      <p>Previous Guest Checkout</p>
      <span>{beforeProgress}%</span>
      <TrackerChunk>
        {beforeOutput.map((item: Task) => {
          return <StyledLi complete={item.complete} />;
        })}
      </TrackerChunk>
      <p>Getting Ready for you</p>
      <span>{duringProgress}%</span>
      <TrackerChunk>
        {duringOutput.map((item: Task) => {
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

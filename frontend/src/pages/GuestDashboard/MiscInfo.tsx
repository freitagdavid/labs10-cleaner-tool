import React from 'react';
import styled from '@emotion/styled';
import { Route } from 'react-router-dom'
import { NavigationFullscreenExit } from 'material-ui/svg-icons';
import { Link } from 'react-router-dom'
interface MiscInfoProps {}

const StyledLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  a {
    padding: 10px;
    display: flex;
    width: 30%;
    height: calc(100vw * 0.3 * 0.4);
    border: solid 1px black;
    justify-content: center;
    align-items: flex-end;
  }
`;
const MiscInfo = (props: any) => {
  return (
    <StyledLinks>
      <a href='http://example.com'>Your Guest Guide</a>
      <a href='http://example.com'>Directions</a>
      <Link to = {`/guestdashboard/${props.id}/surveys`}>Complete a Survey</Link>
    </StyledLinks>
  );
};

export default MiscInfo;

import React from 'react';
import styled from '@emotion/styled';
import { NavigationFullscreenExit } from 'material-ui/svg-icons';

interface MiscInfoProps {}

const StyledLinks = styled.div`
  display: flex;
  justify-content: space-between;
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
const MiscInfo = () => {
  return (
    <StyledLinks>
      <a href='http://example.com'>Your Guest Guide</a>
      <a href='http://example.com'>Directions</a>
      <a href='http://example.com'>Complete a Survey</a>
    </StyledLinks>
  );
};

export default MiscInfo;

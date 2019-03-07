import React from 'react';
import styled from '@emotion/styled';
import { NavigationFullscreenExit } from 'material-ui/svg-icons';

interface MiscInfoProps {}

const StyledLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-left: 1rem;
    .guides {
      border: solid 1px brown;
      padding: 10px;
      display: flex;
      width: 30%;
      height: calc(100vw * 0.3 * 0.4);
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      background-color: white;
    }
  a {
   text-decoration: underline;
   color: var(--color-text-accent);
  }
`;
const MiscInfo = () => {
  return (
    <StyledLinks>
      <div className='guides'>  
        <i className="far fa-file-alt fa-4x"></i>
        <a href='http://example.com'>Your Guest Guide</a>
      </div>
      <div className='guides'>
      <i className="fas fa-map-marked-alt fa-4x"></i>
      <a href='http://example.com'>Directions</a>
      </div>
      <div className='guides'>
      <i className="far fa-file-alt fa-4x"></i>
      <a href='http://example.com'>Complete a Survey</a>
      </div>
    </StyledLinks>
  );
};

export default MiscInfo;

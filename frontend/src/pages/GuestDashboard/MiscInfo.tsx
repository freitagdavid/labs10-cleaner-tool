import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
interface MiscInfoProps {}

const StyledLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 4rem;
  width: 98%;
  border-radius: 5px;
  .guides {
    border: solid 1px rgba(0, 0, 0, 0.2);
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
    color: var(--color-text-accent);
    &:hover {
      text-decoration: underline;
    }
  }
`;
const MiscInfo = (props: any) => {
  return (
    <StyledLinks>
      <div className='guides'>
        <i className='far fa-file-alt fa-4x' />
        <a href='http://example.com'>Your Guest Guide</a>
      </div>
      <div className='guides'>
        <i className='fas fa-map-marked-alt fa-4x' />
        <a href='http://example.com'>Directions</a>
      </div>
      <div className='guides'>
        <i className='far fa-file-alt fa-4x' />
        <Link to={`/guestdashboard/${props.id}/surveys`}>
          Complete a Survey
        </Link>
      </div>
    </StyledLinks>
  );
};

export default MiscInfo;

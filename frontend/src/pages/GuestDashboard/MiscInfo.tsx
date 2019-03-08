import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
interface MiscInfoProps {}

const StyledLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  border-radius: 5px;
  width: 100%;
  .guides {
    --width: 30%;
    display: flex;
    width: 30%;
    height: ${() => {
      const w = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0,
      );
      if (w < 1000) {
        return `${100 * 0.3 * 0.5}vw`;
      } else {
        return `${1000 * 0.3 * 0.5}px`;
      }
    }};
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
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
      <Card className='guides'>
        <i className='far fa-file-alt fa-4x' />
        <a href='http://example.com'>Your Guest Guide</a>
      </Card>
      <Card className='guides'>
        <i className='fas fa-map-marked-alt fa-4x' />
        <a href='http://example.com'>Directions</a>
      </Card>
      <Card className='guides'>
        <i className='far fa-file-alt fa-4x' />
        <Link to={`/guestdashboard/${props.id}/surveys`}>
          Complete a Survey
        </Link>
      </Card>
    </StyledLinks>
  );
};

export default MiscInfo;

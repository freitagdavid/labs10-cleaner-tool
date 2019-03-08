import styled from '@emotion/styled';
import Card from '../../components/Card';

export const StyledGuestDashboard = styled('div')`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  h1 {
    font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
    font-weight: normal;
    font-size: 2.25rem;
    text-align: left;
    padding-left: 0.5rem;
  }
  @media only screen and (max-width: 900px) {
  }
`;

export const GuestInfoWrapper = styled(Card)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  .guest-info {
    display: flex;
    img {
      justify-self: center;
      align-self: center;
      height: 80%;
      width: auto;
    }
    div {
      text-align: left;
      display: block;
      margin-left: 2rem;
      //border: 1px solid green;
      h3 {
        font-size: 1.5rem;
        font-weight: normal;
      }
    }
  }
`;

export const CheckInOut = styled('div')`
  display: flex;
  justify-content: space-around;
  width: 50%;
`;

export const DateContainer = styled('div')`
  background-color: var(--color-bg-secondary);
  flex: 1;
  border: var(--border);
  padding: 1.5rem 1rem;
  align-content: center;
  justify-content: center;
  h2 {
    padding: 0;
    font-family: 'Roboto Medium', Arial, Helvetica, sans-serif;
    color: var(--color-text-accent);
    font-size: var(--header-font-size-secondary);
    margin-bottom: 0.8rem;
  }
  div {
    font-family: 'Roboto Light', Arial, Helvetica, sans-serif;
    font-size: 1rem;
    color: var(--color-text-dark);
  }
`;

export const CheckIn = styled(DateContainer)`
  margin-right: 2rem;
`;

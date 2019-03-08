import styled from '@emotion/styled';
import Card from '../../components/Card';

export const StyledGuestProgressBar = styled(Card)`
  margin: 40px auto 40px auto;
  display: grid;
  background-color: white;
  grid-template-columns: 1fr 8fr 1fr;
  grid-template-rows: auto 40px 30px;
  grid-auto-flow: column;
  grid-template-areas:
    'lable1 label2 label3'
    'previous current overall'
    'previousProgress currentProgress overallProgress';
  align-items: stretch;
  justify-content: stretch;
`;

export const StyledLi = styled.li`
  border: solid 1px black;
  flex: 1;
  background: ${(props: { complete: number }) =>
    props.complete === 1 ? 'var(--color-accent-light)' : 'var(--color-error)'};
`;

export const TrackerChunk = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
`;

export const FinalTrackerChunk = styled.span`
  border: solid 1px black;
  flex: 1;
  background: ${(props: { complete: boolean }) =>
    props.complete ? 'var(--color-accent-light)' : 'var(--color-error)'};
`;

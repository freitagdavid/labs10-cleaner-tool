import styled from '@emotion/styled';

export const StyledGuestProgressBar = styled.div`
  width: 98%;
  margin: 40px auto 40px auto;
  display: grid;
  background-color: white;
  grid-template-columns: 1fr 8fr 1fr;
  grid-template-rows: auto 40px 30px;
  grid-auto-flow: column;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 1rem;
  grid-template-areas:
    'lable1 label2 label3'
    'previous current overall'
    'previousProgress currentProgress overallProgress';
  align-items: stretch;
  justify-content: stretch;
  ol:nth-child(3) {
    background: purple;
    border-radius: 5px 0 0 5px;
  }
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

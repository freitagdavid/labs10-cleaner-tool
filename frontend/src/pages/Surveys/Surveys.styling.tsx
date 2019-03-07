import styled from '@emotion/styled';

export const SurveysHeader = styled('div')`
    display: flex;
    justify-content: space-between;
    h2 {
        font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
        font-weight: normal;
        font-size: 2.25rem;
    }
    @media only screen and  (max-width: 900px) {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      h2 {
        margin: 0 0 1.25rem 0;
      }
    }
`; 

export const SurveyCardWrapper = styled('div')`
    @media only screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 90%;
    }
`;

export const SurveyFilterButtons = styled('div')`
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    h2 {
        font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
        font-weight: normal;
        font-size: 1.25rem;
        margin-top: .8rem;
        margin-right: 1rem;
    }
    button {
        margin-right: 1rem;
    }
    @media only screen and (max-width: 900px) {
        justify-content: center;
    }
`;

export const SurveyCards = styled('div')`
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 110px;
    margin-top: 1.5rem;
    background-color: white;
    border-radius: 5px;
    padding: 0 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    // border: 1.4px solid rgba(132, 132, 132, 0.5);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    
    h3 {
        text-align: left;
        color: var(--color-text-accent);
        margin-top: .5rem;
    }
    @media only screen and (max-width: 900px) {
        width: 100%;
    }
`;

export const SurveyRightContent = styled('div')`
   display: flex;
   align-items: flex-end;
   p {
       margin-right: 1rem;
   }
`;
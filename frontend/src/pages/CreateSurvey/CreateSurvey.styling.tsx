import styled from '@emotion/styled';

export const CreateSurveysWrapper = styled.div`
    text-align: left;
    margin: 0 8rem 0 15rem;
    //border: 1px solid red;
    @media only screen and (max-width: 400px) {
        margin: 0 auto; 
        border: 1px solid blue;
    }
`;

export const CreateSurveyOptions = styled.div`
    background-color: white;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    border: 1px solid #D8D8D8;
    border-radius: 5px;
`;

export const CreateSurveyHeader = styled.h1`
    font-size: 2rem;
    font-weight: normal;
    //border: 1px solid green;
    @media only screen and (max-width: 400px) {
        text-align: center;
        
        margin-top: 2rem;
        border: 1px solid purple;
    }
`;


export const CreateSurveyLables = styled.h2`
    font-size: .9rem;
    color: var(--color-text-accent);
    //border: 1px solid green;
    @media only screen and (max-width: 400px) {
        border: 1px solid red;
    }
`;

export const CreateSurveyInput = styled.input`
    padding-left: .5rem;
    width: 70%;
    height: 30px;
    border-bottom: 1.5px solid #D8D8D8;
    @media (max-width: 780px) {
        width: 100%;
    }
`;

export const SurveyOptions = styled.div`
    display: flex;
    align-items: center;
    //margin-top: 1rem;
    width: 70%;
    //border: 1px solid blue;
`;

export const SurveyType = styled.h3`
    font-size: .8rem;
    margin-top: 1rem;
    margin-right: 1rem;
    //border: 1px solid purple;
`;

export const SurveyTypeButton = styled.button`
    background-color: #428ACB;
    color: white;
    margin-right: .5rem;
    //box-shadow: .2rem .2rem #6D6E71;
    height: 25px;
`;

export const SurveyQuestions = styled.h3`
    font-size: .8rem;
    margin: 0 1rem 0 3rem;
`;

export const CreateSurveyQuestionWrapper = styled.div`
    background-color: white;
    margin-top: 1rem;
    //border: 1px solid purple;
`;

export const CreateSurveyQuestionLables = styled.h3`
    margin-top: 2rem;
    //border: 1px solid blue;
`;

export const CreateSurveyQuestionInput = styled.input`
    padding-left: .5rem;
    width: 70%;
    height: 50px;
    border: 1.5px solid #D8D8D8;

    @media (max-width: 780px) {
        width: 100%;
    }
`;

export const CreateSurveyButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin-top: 2rem;
    margin-left: 5rem;
   //border: 1px solid black;
`;
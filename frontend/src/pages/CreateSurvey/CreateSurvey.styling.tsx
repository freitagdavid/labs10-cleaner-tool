import styled from '@emotion/styled';

export const CreateSurveysWrapper = styled.div`
    text-align: left;
    margin: 0 8rem 0 15rem;
    border: 1px solid red;
    @media (max-width: 780px) {
        // display: flex;
        // justify-content: center;
        // flex-direction: column;
        margin: 0 auto;
        width: 90%;
        text-align: center;
        border: 1px solid blue;
    }
`;

export const CreateSurveyLables = styled.h2`
    font-size: .9rem;
    //border: 1px solid green;
`;

export const CreateSurveyInput = styled.input`
    padding-left: .5rem;
    width: 70%;
    height: 30px;
    border: 1.5px solid #D8D8D8;
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
    box-shadow: .2rem .2rem #6D6E71;
    height: 25px;
`;

export const SurveyQuestions = styled.h3`
    font-size: .8rem;
    margin: 0 1rem 0 3rem;
`;

export const CreateSurveyQuestionWrapper = styled.div`
    margin-top: 1rem;
    border: 1px solid purple;
`;

export const CreateSurveyQuestionLables = styled.h3`
    margin-top: 2rem;
    border: 1px solid blue;
`;

export const CreateSurveyQuestionInput = styled.input`
    padding-left: .5rem;
    width: 70%;
    height: 50px;
    border: 1.5px solid #D8D8D8;
`;

export const CreateSurveyButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin-top: 2rem;
    margin-left: 5rem;
    border: 1px solid black;
`;
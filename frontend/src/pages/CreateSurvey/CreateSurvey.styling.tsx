import styled from '@emotion/styled';

export const CreateSurveysWrapper = styled.div`
    text-align: left;
    margin: 0 8rem 0 15rem;
    //border: 1px solid red;
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
`;

export const SurveyOptions = styled.div`
    display: flex;
    align-items: center;
    //margin-top: 1rem;
    width: 70%;
    border: 1px solid blue;
`;

export const SurveyType = styled.h3`
    font-size: .8rem;
    margin-top: 1rem;
    margin-right: 1rem;
    //border: 1px solid purple;
`;

export const SurveyTypeButton = styled.button`
    box-shadow: .2rem .2rem #D8D8D8;
    height: 25px;
    &:active {
        background-color: green;
    }
`;

export const SurveyQuestions = styled.h3`
    font-size: .8rem;
    margin: 0 1rem 0 3rem;
`;
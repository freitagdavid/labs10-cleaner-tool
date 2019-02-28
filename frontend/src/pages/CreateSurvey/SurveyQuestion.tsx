import React, { useState } from 'react';
import { CreateSurveyQuestionWrapper, CreateSurveyQuestionLables, CreateSurveyQuestionInput, } from './CreateSurvey.styling';

const SurveyQuestion = (props: any) => {

    return (
<<<<<<< HEAD
        <CreateSurveyQuestionWrapper>
            <CreateSurveyQuestionLables>Question {props.questionNumber}</CreateSurveyQuestionLables>
            <CreateSurveyQuestionInput type = 'text' placeholder = 'Add question text here' onChange = {handleQuestion}/>
=======
        <div>

            <CreateSurveyLables>Question {props.questionNumber}</CreateSurveyLables>
            <CreateSurveyInput type = 'text' placeholder = 'Add question text here' onChange = {(ev:any)=>{props.setQuestion(ev.target.value)}}/>
>>>>>>> 60b7f0cc87ea3d59b541c5dd95645e9583041572
            <div>
                <button type='button' onClick={() => props.setQuestionType(1)}>Yes/No</button>
                <button type='button' onClick={() => props.setQuestionType(2)}>1-5 Rating</button>
                <button type='button' onClick={() => props.setQuestionType(3)}>Free Text</button>
            </div>
<<<<<<< HEAD
        </CreateSurveyQuestionWrapper>
=======
        </div>

>>>>>>> 60b7f0cc87ea3d59b541c5dd95645e9583041572
    )
}
export default SurveyQuestion
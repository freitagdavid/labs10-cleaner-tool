import React, { useState } from 'react';
import { //CreateSurveyQuestionWrapper, 
    // CreateSurveyQuestionLables, 
    CreateSurveyOptions,
    CreateSurveyInput,
    QuestionOptions } 
    from './CreateSurvey.styling';

const SurveyQuestion = (props: any) => {

    return (
        <CreateSurveyOptions>
            <h3>Question {props.questionNumber}</h3>
            <CreateSurveyInput type = 'text' placeholder = 'Add question text here' onChange = {(ev:any)=>{props.setQuestion(ev.target.value)}}/>
            <QuestionOptions>
                <button type='button' onClick={() => props.setQuestionType(1)}>Yes/No</button>
                <button type='button' onClick={() => props.setQuestionType(2)}>1-5 Rating</button>
                <button type='button' onClick={() => props.setQuestionType(3)}>Free Text</button>
            </QuestionOptions>
        </CreateSurveyOptions>
    )
}
export default SurveyQuestion
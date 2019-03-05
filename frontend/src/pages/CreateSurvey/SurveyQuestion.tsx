import React, { useState } from 'react';
import { CreateSurveyQuestionWrapper, CreateSurveyQuestionLables, CreateSurveyQuestionInput, } from './CreateSurvey.styling';

const SurveyQuestion = (props: any) => {

    return (
        <CreateSurveyQuestionWrapper>
            <CreateSurveyQuestionLables>Question {props.questionNumber}</CreateSurveyQuestionLables>
            <CreateSurveyQuestionInput type = 'text' placeholder = 'Add question text here' onChange = {(ev:any)=>{props.setQuestion(ev.target.value)}}/>
            <div>
                <button className = {`${props.activeClass(1, props.questionType)}`} type='button' onClick={() => props.setQuestionType(1)}>Yes/No</button>
                <button className = {`${props.activeClass(2, props.questionType)}`} type='button' onClick={() => props.setQuestionType(2)}>1-5 Rating</button>
                <button className = {`${props.activeClass(3, props.questionType)}`} type='button' onClick={() => props.setQuestionType(3)}>Free Text</button>
            </div>
        </CreateSurveyQuestionWrapper>
    )
}
export default SurveyQuestion
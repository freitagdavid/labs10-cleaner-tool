import React, { useState } from 'react';
const SurveyQuestion = (props: any) => {

    return (
        <div>
            <h2>Question {props.questionNumber}</h2>
            <input type='text'
                placeholder='Add question text here'
                onChange={(ev: any) => { props.setQuestion(ev.target.value) }} />
            <div>
                <button type='button' onClick={() => props.setQuestionType(1)}>Yes/No</button>
                <button type='button' onClick={() => props.setQuestionType(2)}>1-5 Rating</button>
                <button type='button' onClick={() => props.setQuestionType(3)}>Free Text</button>
            </div>
        </div>

    )
}
export default SurveyQuestion
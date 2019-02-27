import React, { useState } from 'react';

const SurveyQuestion = (props: any) => {
    const [questionType, setQuestionType] = useState(1)
    const [question, setQuestion] = useState('')
    const handleQuestion = (ev:any) =>{
        setQuestion(ev.target.value)
    }
    return (
        <div>
            <h2>Question {props.questionNumber}</h2>
            <input type = 'text' placeholder = 'Add question text here' onChange = {handleQuestion}/>
            <div>
                <button type = 'button' onClick = {()=> setQuestionType(1)}>Yes/No</button>
                <button type='button' onClick={()=>setQuestionType(2)}>1-5 Rating</button>
                <button type='button' onClick={()=>setQuestionType(3)}>Free Text</button>
            </div>
        </div>
    )
}
export default SurveyQuestion
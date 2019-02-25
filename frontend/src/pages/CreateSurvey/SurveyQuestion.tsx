import React, { useState } from 'react';
const SurveyQuestion = (questionNumber: any) => {
    return (
        <div>
            <h2>Question {}</h2>
            <input type = 'text' placeholder = 'Add question text here'/>
            <div>
                <button>Yes/No</button>
                <button>1-5 Rating</button>
                <button>Free Text</button>
            </div>
        </div>
    )
}
export default SurveyQuestion
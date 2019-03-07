import React from 'react';

const Response = (props:any) => {
    return(
        <div className="single-response">
            <h3>Question{props.qid}</h3>
            <h4>{props.question}</h4>
            <h5>{props.answer}</h5>
        </div>
    )
}

export default Response;
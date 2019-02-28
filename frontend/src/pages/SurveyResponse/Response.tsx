import React from 'react';

const Response = (props:any) => {
    return(
        <div className="single-response">
            <h3>{props.question}</h3>
            <h5>{props.answer}</h5>
        </div>
    )
}

export default Response;
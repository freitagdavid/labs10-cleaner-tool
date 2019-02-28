import React from 'react';

const Response = (props) => {
    return(
        <div className="single-response">
            <div className="q1">
                <h3>{props.question}</h3>
                <h5>{props.anwser}</h5>
            </div>
        </div>
    )
}
import React from 'react';
import RatingComponent from './RatingComponent';
import YNComponent from './YNComponent';

const Response = (props:any) => {
    if(props.answerType == 1){
        return(
            <div className="single-response">
                <h3>Question{props.qid}</h3>
                <h4>{props.question}</h4>
                <YNComponent />
            </div>
        ) 
    }

    if(props.answerType == 2){
        return(
            <div className="single-response">
                <h3>Question{props.qid}</h3>
                <h4>{props.question}</h4>
                <RatingComponent />
            </div>
        )
    }
    return(
        <div className="single-response">
            <h3>Question{props.qid}</h3>
            <h4>{props.question}</h4>
            <h5>{props.answer}</h5>
        </div>
    )
}

export default Response;
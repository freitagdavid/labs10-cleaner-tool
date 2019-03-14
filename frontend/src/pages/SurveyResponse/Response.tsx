import React from 'react';
import RatingComponent from './RatingComponent';
import YNComponent from './YNComponent';

const Response = (props:any) => {
    if(props.answerType == 1){
        return(
            <div className="single-response">
                <h3>Question {props.index}</h3>
                <p>{props.question}</p>
                <YNComponent yn_answer={props.answer} />
            </div>
        ) 
    }

    if(props.answerType == 2){
        return(
            <div className="single-response">
                <h3>Question {props.index}</h3>
                <p>{props.question}</p>
                <RatingComponent rating_answer={props.answer} />
            </div>
        )
    }
    return(
        <div className="single-response">
            <h3>Question {props.index}</h3>
            <p>{props.question}</p>
            <p>{props.answer}</p>
        </div>
    )
}

export default Response;

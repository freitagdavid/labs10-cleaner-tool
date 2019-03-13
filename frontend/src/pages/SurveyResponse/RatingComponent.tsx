import React from 'react';
import './SurveyResponse.css';

const RatingComponent = (props:any) => {

    let selectOne = () => {
        let buttonClass = "button-style";
        if(props.rating_answer === "1"){
            buttonClass = "select";
        }
        return buttonClass;
    }

    let selectTwo = () => {
        let buttonClass = "button-style";
        if(props.rating_answer === "2"){
            buttonClass = "select";
        }
        return buttonClass;
    }

    let selectThree = () => {
        let buttonClass = "button-style";
        if(props.rating_answer === "3"){
            buttonClass = "select";
        }
        return buttonClass;
    }

    let selectFour = () => {
        let buttonClass = "button-style";
        if(props.rating_answer === "4"){
            buttonClass = "select";
        }
        return buttonClass;
    }

    let selectFive = () => {
        let buttonClass = "button-style";
        if(props.rating_answer === "5"){
            buttonClass = "select";
        }
        return buttonClass;
    }

    return(
        <div className = "rating-container">
          <button className={selectOne()}>1</button>
          <button className={selectTwo()}>2</button>
          <button className={selectThree()}>3</button>
          <button className={selectFour()}>4</button>
          <button className={selectFive()}>5</button> 
        </div>
    )
}

export default RatingComponent;
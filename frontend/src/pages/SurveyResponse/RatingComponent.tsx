import React from 'react';

const RatingComponent = (props:any) => {

    let selectOne = () => {
        if(props.yn_answer == "1"){
            return("select");
        }
    }

    let selectTwo = () => {
        if(props.yn_answer == "2"){
            return("select");
        }
    }

    let selectThree = () => {
        if(props.yn_answer == "3"){
            return("select");
        }
    }

    let selectFour = () => {
        if(props.yn_answer == "4"){
            return("select");
        }
    }

    let selectFive = () => {
        if(props.yn_answer == "5"){
            return("select");
        }
    }

    return(
        <div>
          <button className = {selectOne()}>1</button>
          <button className = {selectTwo()}>2</button>
          <button className = {selectThree()}>3</button>
          <button className = {selectFour()}>4</button>
          <button className = {selectFive()}>5</button> 
        </div>
    )
}

export default RatingComponent;
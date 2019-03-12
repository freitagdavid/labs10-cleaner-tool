import React from 'react';

const YNComponent = (props:any) => {

    let selectYes = () => {
        let buttonClass = "button-style";
        if(props.yn_answer.toLowerCase() === "yes"){
            buttonClass = "select";
        }
        return buttonClass;
    }

    let selectNo = () => {
        let buttonClass = "button-style";
        if(props.yn_answer.toLowerCase() === "no"){
            buttonClass = "select";
        }
        return buttonClass;
    }
 

    return(
        <div className='yn-container'>
            <button className={selectYes()} >Yes</button>
            <button className={selectNo()}>No</button>       
        </div>
    )
}

export default YNComponent;
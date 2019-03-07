import React from 'react';

const YNComponent = (props:any) => {

    let selectYes = () => {
        if(props.yn_answer.toLowerCase() === "yes"){
            return("select");
        }
    }

    let selectNo = () => {
        if(props.yn_answer.toLowerCase() === "no"){
            return("select");
        }
    }
 

    return(
        <div>
            <button className={selectYes()}>Yes</button>
            <button className={selectNo()}>No</button>       
        </div>
    )
}

export default YNComponent;
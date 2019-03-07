import React,{useState} from 'react';

const YNComponent = (props:any) => {

    let selectAnswer = () => {
         const button = String(props.children);
         console.log(button);
        if(props.name == button.toLowerCase()){
            return("select");
        }else{
            return("");
        }
    }   

    return(
        <div>
            <button className={selectAnswer()} name={props.yn_answer}>Yes</button>
            <button className={selectAnswer()} name={props.yn_answer}>No</button> 
        </div>
    )
}

export default YNComponent;
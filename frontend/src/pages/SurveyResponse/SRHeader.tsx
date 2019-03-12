import React from 'react';


const SRHeader = (props:any) => {

    let surveyName = () => {
        if(props.surveys.length === 0){
            return("No Surveys Here");
        }else{
            return(`${props.surveys[0].name} - Responses`);
            }
        }

    return(
        <div className = 'sr-title'>
            <h1>{surveyName()}</h1>
            {console.log(props.surveys)}
        </div> 
    )
}

export default SRHeader;
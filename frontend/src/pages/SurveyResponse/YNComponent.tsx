import React from 'react';

const YNComponent = (props:any) => {

    

    return(
        <div>
            <input checked={props.yn_answer==="yes"} type="radio" disabled={true} value="yes" />
            <input checked={props.yn_answer==="no"} type="radio" disabled={true} value="no" />        
        </div>
    )
}

export default YNComponent;
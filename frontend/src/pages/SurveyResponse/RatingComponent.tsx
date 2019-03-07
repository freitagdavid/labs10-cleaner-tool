import React from 'react';

const RatingComponent = (props:any) => {
    return(
        <div>
            <input checked={props.yn_answer=="1"} type="radio" disabled={true} value="1" />
            <input checked={props.yn_answer=="2"} type="radio" disabled={true} value="2" />
            <input checked={props.yn_answer=="3"} type="radio" disabled={true} value="3" />
            <input checked={props.yn_answer=="4"} type="radio" disabled={true} value="4" />
            <input checked={props.yn_answer=="5"} type="radio" disabled={true} value="5" />
        </div>
    )
}

export default RatingComponent;
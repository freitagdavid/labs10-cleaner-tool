import React from 'react';

const Properties = (props:any) => {
    return(
        <div className='sr-title'>
            <select name="properties" onChange={props.changeHandler}>
                <option value="title">Filter By Property</option>
                {props.surveys.map((survey:any) =>{
                return(<option value={survey.house_name}>{survey.house_name}</option> )
                })}
            </select> 
        </div>
    )
}

export default Properties;
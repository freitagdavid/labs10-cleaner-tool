
import React, { useState, useEffect } from 'react'
import { SurveyAnswers } from '../../pages';

const Boolean = (props: any)=>{
    const [selected, setSelected] = useState('yes')
    useEffect(() => {
        (() => {
            setSelected('yes')
            props.setAnswers(selected)
        })()
    }, []);
    const handleClick = (event: any) => {
        if (selected != event.target.value) {
            setSelected(event.target.value)
            props.setAnswers(selected)
        }
    }
    useEffect(() => {
        (() => {
            props.setAnswers(selected)
        })()
    }, [selected]);

    return (
    <div>
        <h3>{props.question.question}</h3>
        <div>
                <button type='button' value='yes' onClick={async (event) => { await handleClick(event) }
                }>yes</button>
                <button type='button' value='no' onClick={async (event) => { await handleClick(event) }
                }>no</button>
        </div>
    </div>
    )
}

export default Boolean
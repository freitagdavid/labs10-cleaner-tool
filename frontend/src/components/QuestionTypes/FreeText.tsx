import React, { useState } from 'react'

const FreeText = (props: any) => {
    const [input, setInput] = useState('')

    return (
        <div>
            <h3>{props.question.question}</h3>
            <div>
                <input type='text' value={props.answer} onChange={(ev: any) => {
                    props.setAnswers(ev.target.value);
                }}/>
            </div>
        </div>
    )

}

export default FreeText
import React, { useState, useEffect } from 'react'


const OutOfFive = (props: any) => {
    const [selected, setSelected] = useState('1')
    const questionNumber = `question${props.question.id}`
    useEffect(() => {
        (() => {
            setSelected('1')
            props.setAnswers(selected)
        })()
    }, []);
    const handleClick = (event: any) =>{
        if(selected != event.target.value){
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
                <button type='button' value = '1' onClick={async(event) => { await handleClick(event)}
                }>1</button>
                <button type='button' value='2' onClick={async(event) => {await handleClick(event) }
                }>2</button>
                <button type='button' value='3' onClick={async(event) => {await handleClick(event) }
                }>3</button>
                <button type='button' value='4' onClick={async(event) => {await handleClick(event) }
                }>4</button>
                <button type='button' value='5' onClick={async(event) => {await handleClick(event) }
                }>5</button>
            </div>
        </div>
    )

}

export default OutOfFive
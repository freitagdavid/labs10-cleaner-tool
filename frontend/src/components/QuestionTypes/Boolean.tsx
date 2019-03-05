import React, { useState, useEffect } from 'react'
import { SurveyAnswers } from '../../pages';

const Boolean = (props: any)=>{
    const [selected, setSelected] = useState('yes')
    const questionNumber = `question${props.question.id}`
    useEffect(() => {
        (() => {
            let obj: any = {}
            obj[questionNumber] = selected
            props.answers.push(obj)
            console.log(props.answers)
        })()
    }, []);
    useEffect(() => {
        (() => {
            const answers = props.answers[0]
            const keys = Object.keys(answers)
            for (let i = 0; i < keys.length; i++) {
                if (keys[i] == questionNumber) {
                    if (selected == 'no') {
                        answers[keys[i]] = 'no'
                        console.log(props.answers)
                    }
                    if (selected == 'yes') {
                        answers[keys[i]] = 'yes'
                    }
                }
            }
        })()
    }, [selected]);

    return (
    <div>
        <h3>{props.question.question}</h3>
        <div>
            <button type = 'button' onClick = {()=> {
                if(selected!= 'yes'){
                setSelected('yes')
                }
            }}
            >Yes</button>
            <button type = 'button' onClick = {()=> {
                if(selected != 'no'){
                    setSelected('no')
                }
        }
        }>No</button>
        </div>
    </div>
    )
}

export default Boolean
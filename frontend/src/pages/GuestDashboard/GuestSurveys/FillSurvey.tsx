import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Boolean from '../../../components/QuestionTypes/Boolean'
import OutOfFive from '../../../components/QuestionTypes/OutOfFive'
const FillSurvey = (props: any)=>{
    const surveyId = props.match.params.surveyId
    const [questions, setQuestions]= useState([])
    const [answers, setAnswers] = useState([])
    const userId = props.match.params.id
    const url = process.env.REACT_APP_backendURL || 'https://labs10-cleaner-app-2.herokuapp.com';
    useEffect(() => {
        (async () => {
            const response = await axios.get(`${url}/surveysquestions/${surveyId}`)
            setQuestions(response.data.questions);
            
        })()
    }, []);
    console.log(questions)
    return (
        <form>
            {
        questions.map((question: any,index)=>{
            if(question.type == 1){
                return <Boolean 
                key = {index}
                question = {question}
                answers = {answers}
                setAnswers = {setAnswers}
                />
            }
            if (question.type == 2) {
          
            }
        })
            }
        </form>
    )
}

export default FillSurvey
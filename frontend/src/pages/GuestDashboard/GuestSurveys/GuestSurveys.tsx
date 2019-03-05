import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import FillSurvey from './FillSurvey'
const GuestSurveys = () =>{
    const [surveyList, setSurveyList] = useState([])
    const url = process.env.REACT_APP_backendURL || 'https://labs10-cleaner-app-2.herokuapp.com';

    const getSurveys = async() => {
    
    }
    useEffect(()=>{
    (async()=>{
        const response = await axios.get(`${url}/surveys/1`)
        setSurveyList(response.data)
        
    })()
    },[]);
    console.log(surveyList)
    return(
        <div>
            {surveyList.map((survey: any,index:number)=>{
                if(survey.isGuest){
                    const surveyId = survey.id;
                    const userId = survey.user_id;
                    return (
                    <div key = {index}>
                            <Link to={`/guestdashboard/surveys/${userId}/${surveyId}`}>{survey.name}</Link>
                    </div>
                    )   
                } 
            })}
        </div>
    )
}
export default GuestSurveys
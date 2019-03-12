import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import FillSurvey from './FillSurvey'
const GuestSurveys = (props: any) =>{
    const [surveyList, setSurveyList] = useState([])

    const url = process.env.REACT_APP_backendURL || 'https://labs10-cleaner-app-2.herokuapp.com';

    useEffect(()=>{
    (async()=>{
        const response = await axios.get(`${url}/stay/surveys/${props.match.params.stayId}`)
        setSurveyList(response.data)
        
    })()
    },[]);
    console.log(surveyList)
    return(
        <div>
                {
                    surveyList.length=== 0? <div> No Surveys</div>:
                        surveyList.map((survey: any, index: number) => {
                            if (survey.isGuest) {
                                const surveyId = survey.id;
                                const userId = survey.user_id;
                                const stayId = props.match.params.stayId
                                return (
                                    <div key={index}>
                                        <Link to={`/guestdashboard/${stayId}/surveys/${userId}/${surveyId}`}>{survey.name}</Link>
                                    </div>
                                )
                    }
                
            })}
        </div>
    )
}
export default GuestSurveys
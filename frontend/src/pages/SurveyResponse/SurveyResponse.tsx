 import React, {useEffect, useState} from 'react';
 import axios from 'axios';
 import { useFetch } from '../../helpers';
 import loadingIndicator from '../utils/loading.svg';

 import Responses from './Responses';
 import './images/profile_pic_default.png';
 import './SurveyResponse.css';
 
const SurveyResponse = (props:any) => {

const url =
process.env.REACT_APP_backendURL || 'https://labs10-cleaner-app-2.herokuapp.com';

const [response, err, loading] = useFetch(`${url}/surveyresponses/${props.match.params.id}`, true, 'get');

let surveyName = () => {
    if(response.survey.length === 0){
        return("No Surveys Here");
    }else{
        return(`${response.survey[0].name} - Responses`);
        }
    }
          
if (loading === true) {
    return(
        <img src = {loadingIndicator} />
    )} else {
        return(
            <div className = 'sr-container'>
                <div className = 'sr-title'>
                    <h1>{surveyName()}</h1>
                    {console.log(response.survey)}
                    <select name="properties">
                        <option value="title">Filter By Property</option>
                        <option value="property1">Property1</option>
                        <option value="property2">Property2</option>
                        <option value="property3">Property3</option>
                    </select>
                </div>  
                
                {response.survey.map((survey: any) =>
                <Responses key={survey.id} survey={response.survey} sr_name="Guest Name" sr_date='02-24-19' sr_img='images/profile_default.png' />
                )}
                 {console.log(response.survey)}
            </div>
            )    
        }
    }
    


export default SurveyResponse;
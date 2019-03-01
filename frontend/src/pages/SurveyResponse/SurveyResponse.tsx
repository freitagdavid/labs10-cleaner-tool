 import React, {useEffect, useState} from 'react';
 import axios from 'axios';
 import { useFetch } from '../../helpers';
 import loadingIndicator from '../utils/loading.svg';

 import Responses from './Responses';
 
const SurveyResponse = () => {

const url =
process.env.REACT_APP_backendURL || 'https://labs10-cleaner-app-2.herokuapp.com';

const [response, err, loading] = useFetch(`${url}/surveyresponses/1`, true, 'get');
          
if (loading === true) {
    return(
        <img src = {loadingIndicator} />
    )} else {
        return(
            <div>
                <h3>Returning from SurveyResponse</h3> 
                
                {response.survey.map((survey: any) =>
                <Responses survey = {response.survey} sr_name = {survey.name} sr_date = '02-24-19' />
                )}
                 {console.log(response.survey)}
            </div>
            )    
        }
    }
    


export default SurveyResponse;
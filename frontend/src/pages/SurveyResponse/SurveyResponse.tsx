 import React, {useEffect, useState} from 'react';
 import axios from 'axios';
 import { useFetch } from '../../helpers';
 import loadingIndicator from '../utils/loading.svg';

 import Responses from './Responses';
 import Properties from './Properties';
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

let guestPic = () => {
    let sIndex = -1;
    for(let i=0; i< response.survey.length; i++){
        sIndex += 1;
        console.log(sIndex);
    if(response.survey[sIndex].photo === null){
        response.survey[sIndex].photo = "https://nahealth.com/sites/default/files/styles/max_image_size/public/var/sites/nah/sites/default/files/media/profile-placeholder_0_0_0_0.png?itok=ywlRw7Li";
        }else{
            response.survey[sIndex].photo = response.survey[sIndex].photo;
        }
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
                </div> 

                <div className='sr-title'>
                    <select name="properties">
                        <option value="title">Filter By Property</option>
                        {response.survey.map((survey:any) =>{
                        return(<option value={survey.house_name}>{survey.house_name}</option> )
                        })}
                    </select> 
                </div>
                
                {response.survey.map((survey: any) =>
                <Responses key={survey.id} survey={response.survey} sr_name={survey.guest_name} sr_date={survey.created_at} guestPic={guestPic()} sr_img={survey.photo} />
                )}
                 {console.log(response.survey)}
            </div>
            )    
        }
    }
    


export default SurveyResponse;
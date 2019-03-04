import React from 'react';
import Response from './Response';
import { useFetch } from '../../helpers';
<<<<<<< HEAD
//import loadingIndicator from '../utils/loading.svg';
=======
import loadingIndicator from '../utils/loading.svg';
import './SurveyResponse.css';
>>>>>>> a98c8ac4eca372b5b2ff5930c146a7ede1c053c0


const Responses = (props:any) => {
    return(
        <div className='responses-container'>
            <div className='responses-guest'>
                <div className='responses-img'>
                    <img src = {props.sr_img} />
                </div>
                <div className='responses-info'>
                    <p>{props.sr_name}</p>
                    <p>{props.sr_date}</p>
                </div>
            </div>
            <div className = 'responses-answers'>
                {props.survey.map((instance:any) => 
                <Response key={instance.id} question = {instance.question} answer = {instance.answer} />
                )}
            </div>
        </div>
    )
}

export default Responses;
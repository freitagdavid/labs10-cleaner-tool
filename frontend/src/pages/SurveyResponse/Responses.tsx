import React from 'react';
import Response from './Response';
import { useFetch } from '../../helpers';
import loadingIndicator from '../utils/loading.svg';


const Responses = (props:any) => {
    return(
        <div>
            <div>
                <img src = {props.sr_img} />
                <p>{props.sr_name}</p>
                <p>{props.sr_date}</p>
                </div>
            <div>
                {props.survey.map((instance:any) => 
                <Response question = {instance.question} answer = {instance.answer} />
                )}
            </div>
        </div>
    )
}

export default Responses;
import React from 'react';
import { Survey, FilterArgs } from './types';
import { Link } from 'react-router-dom';
import { useFetch } from '../../helpers';
import { Button } from '../../components/index';
import {
    SurveyCards, 
    SurveyRightContent,
} from './Surveys.styling';
import './Surveys.css';


const SurveyCard = (props : any) => {
    const{
        survey,
        id,
        isGuest,
        name,
       
    } = props
    console.log(props)
    const url = process.env.REACT_APP_backendURL || 'https://labs10-cleaner-app-2.herokuapp.com';
    const [data] = useFetch(`${url}/surveyresponses/${id}`, true, 'get');
    return(
        
            <SurveyCards>  
                <div >
                    <h3>{`${name}`}</h3>
                    <Link to={`/surveys/${id}/responses`}>
                        <Button text="View Survey Responses" color='var(--color-accent)'></Button>
                    </Link>
                </div>
                <SurveyRightContent>
                    <p>Responses</p>
                    <h2>{props.responses}</h2>
                </SurveyRightContent>
            </SurveyCards>
        
    )
}

export default SurveyCard;
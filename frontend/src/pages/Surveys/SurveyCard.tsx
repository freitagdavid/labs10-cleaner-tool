import React from 'react';
import { Survey, FilterArgs } from './types';
import { Link } from 'react-router-dom';
import { Button } from '../../components/index';
import {
    SurveyCards, 
    SurveyRightContent,
} from './Surveys.styling';
import './Surveys.css';

const SurveyCard = (props : Survey) => {
    const{
        survey,
        id,
        isGuest,
        name,
    } = props
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
                    {/* need data */}
                    <h2>10</h2>
                </SurveyRightContent>
            </SurveyCards>
        
    )
}

export default SurveyCard;
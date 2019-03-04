import React from 'react';
import { Survey, FilterArgs } from './types';
import { Link } from 'react-router-dom';
import { Button } from '../../components/index';
import './Surveys.css';

const SurveyCard = (props : Survey) => {
    const{
        survey,
        id,
        isGuest,
        name,
    } = props
    return(
        <>
            <div className='survey-card'>  
                <div className ='survey-left-content'>
                    <h3>{`${name}`}</h3>
                    <Link to='#'>
                        <Button className='survey-response-button' text="View Survey Responses" color='var(--color-accent)'></Button>
                    </Link>
                </div>
                <div className ='survey-right-content'>
                    <p>Responses</p>
                    {/* need data */}
                    <h2>10</h2>
                </div>
            </div>
        </>
    )
}

export default SurveyCard;
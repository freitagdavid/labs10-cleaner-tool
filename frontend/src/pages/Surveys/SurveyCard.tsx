import React from 'react';
import { Survey, FilterArgs } from './types';
import { Link } from 'react-router-dom';
import { Button } from '../../components/index';
const SurveyCard = (props : Survey) => {
    const{
        survey,
        id,
        isGuest,
        name,
    } = props
    return(
        <>
            <div>  
                <div className ='survey-left-content'>
                    <h3>{`${name}`}</h3>
                    <Link to='#'>
                        <Button text="View Survey Responces" color='var(--color-accent)'></Button>
                    </Link>
                </div>
                <div className ='survey-rigth-content'>
                    <p>Responces</p>
                    {/* need data */}
                    <h2>10</h2>
                </div>
            </div>
        </>
    )
}

export default SurveyCard;
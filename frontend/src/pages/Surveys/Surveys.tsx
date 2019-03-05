import React, {useState} from 'react';
import axios from 'axios';
import { useFetch } from '../../helpers';
import { Survey, FilterArgs } from './types';
import loadingIndicator from '../utils/loading.svg';
import { Button, Container } from '../../components/index';
import { Link } from 'react-router-dom';
import SurveyCard from './SurveyCard';
import {
    SurveysHeader,
    SurveyCardWrapper,
    SurveyFilterButtons,
} from './Surveys.styling';
import './Surveys.css'

const Surveys = () => {
    const url =
    process.env.REACT_APP_backendURL || 'https://labs10-cleaner-app-2.herokuapp.com';
    const [active, setActive] = useState( 1 as any);
    const [data, err, loading] = useFetch(`${url}/surveys`)
    const activeClass = (filter: FilterArgs) =>
    active === filter ? 'active' : '';
    
    return (
        <Container>
            <SurveysHeader >
                <h2>Surveys</h2>
                <Link to="/createsurvey" >
                    {/* <button className='create-survey'>+ Create New Survey</button> */}
                    <Button className='create-survey' text="+ Create New Survey" color='var(--color-accent)'></Button>
                </Link>
            </SurveysHeader>
            <SurveyFilterButtons>
            <h2>Sort By:</h2> 
            <Button
          className={`button-filter guest ${activeClass(1)}`}
          text='Guest'
          color='var(--color-button-background-alt)'
          onClick={() => setActive(1)}
          datatestid='button-guest'
        />
        <Button
          className={`button-filter assistant ${activeClass(0)}`}
          text='Assistant'
          color='var(--color-button-background-alt)'
          onClick={() => setActive(0)}
          datatestid='button-assistant'
        />
        </SurveyFilterButtons>
            <SurveyCardWrapper>
                {loading ? (
                    <img src={loadingIndicator} alt='animated loading indicator' />
                ) : data ? (

                data.map((survey: Survey) => 
                    (
                    <div className={`survey${activeClass(survey.isGuest)}`} key={survey.id}>
                        <SurveyCard {...survey} key={survey.id}></SurveyCard> 
                    </div>
                ))
            ) : null}
            </SurveyCardWrapper>
        </Container>
    )
}

export default Surveys
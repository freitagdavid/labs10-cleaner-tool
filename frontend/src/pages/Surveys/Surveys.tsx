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
    SimpleButton
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
                <SimpleButton
                    className={`${activeClass(1)}`}
                    onClick={() => setActive(1)}
                >Guest</SimpleButton>
                <SimpleButton
                    className={`${activeClass(0)}`}
                    onClick={() => setActive(0)}
                >Assistant</SimpleButton>
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
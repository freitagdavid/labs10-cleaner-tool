import React, {useState} from 'react';
import axios from 'axios';
import { useFetch } from '../../helpers';
import { Survey, FilterArgs } from './types';
import loadingIndicator from '../utils/loading.svg';
import { Button, Container } from '../../components/index';
import { Link } from 'react-router-dom';
import SurveyCard from './SurveyCard'
import './Surveys.css'

const Surveys = () => {
    const url =
    process.env.REACT_APP_backendURL || 'https://labs10-cleaner-app-2.herokuapp.com';
    const [active, setActive] = useState( 1 as any);
    const [data, err, loading] = useFetch(`${url}/surveys`)

    console.log(data)
    const activeClass = (filter: FilterArgs) =>
    active === filter ? 'active' : '';
    
    return (
        <Container>
            <div className="surveys-header">
                <h2>Surveys</h2>
                <Link to="/createsurvey" >
                    {/* <button className='create-survey'>+ Create New Survey</button> */}
                    <Button className='create-survey' text="+ Create New Survey" color='var(--color-accent)'></Button>
                </Link>
            </div>
            <div className='surveys-filter-buttons'>
            
            <Button
          className={`button-filter guest ${activeClass(1)}`}
          text='Guest'
          color='var(--color-text-accent)'
          onClick={() => setActive(1)}
          datatestid='button-guest'
        />
        <Button
          className={`button-filter assistant ${activeClass(0)}`}
          text='Assistant'
          color='var(--color-text-accent)'
          onClick={() => setActive(0)}
          datatestid='button-assistant'
        />
        </div>
            <div>
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
            </div>
        </Container>
    )
}

export default Surveys
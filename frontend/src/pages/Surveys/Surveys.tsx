import React, { useState } from 'react';
import axios from 'axios';
import { useFetch } from '../../helpers';
import { Survey, FilterArgs } from './types';
import loadingIndicator from '../utils/loading.svg';
import { Button, Container } from '../../components/index';
import { Link } from 'react-router-dom';
import './Surveys.css'

const Surveys = () => {
    const url =
    process.env.REACT_APP_backendURL || 'https://labs10-cleaner-app-2.herokuapp.com';
    const [active, setActive] = useState(true as FilterArgs);
    const [data, err, loading] = useFetch(`${url}/surveys`)

    
    const activeClass = (filter: FilterArgs) =>
    active === filter ? 'active' : '';

    
    return (
        <Container>
            <div className="surveys-header">
                <h1> Surveys page </h1>
                <Link to="/createsurvey">
                    <Button text="+ New Survey" color='var(--color-accent)'></Button>
                </Link>
            </div>
            <div className='surveys-filter-buttons'>
            <Button
          className={`button-filter guest ${activeClass(true)}`}
          text='Guest'
          color='var(--color-text-accent)'
          onClick={() => setActive(true)}
          datatestid='button-guest'
        />
        <Button
          className={`button-filter assistant ${activeClass(false)}`}
          text='Assistant'
          color='var(--color-text-accent)'
          onClick={() => setActive(false)}
          datatestid='button-assistant'
        />
        </div>
            <div>
                {loading ? (
                    <img src={loadingIndicator} alt='animated loading indicator' />
                ) : data ? (
                data.map((survey: Survey) => 
                    (<div className={`survey${activeClass(survey.isGuest)}`} key={survey.id}>{`${survey.name} ${survey.isGuest} responces:0`}</div> 
                ))
            ) : null}
            </div>
        </Container>
    )
}

export default Surveys
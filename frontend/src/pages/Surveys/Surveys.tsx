import React, { useState } from 'react';
import axios from 'axios';
import { useFetch } from '../../helpers';
import { Survey, FilterArgs } from './types';
import loadingIndicator from '../utils/loading.svg';
import { Button, Container } from '../../components/index';
import { Link } from 'react-router-dom';


const Surveys = () => {
    const url =
    process.env.REACT_APP_backendURL || 'https://labs10-cleaner-app-2.herokuapp.com';
    const [data, err, loading] = useFetch(`${url}/surveys`)
    const [active, setActive] = useState('all' as FilterArgs);
    
    const activeClass = (filter: FilterArgs) =>
    active === filter ? 'active' : '';

    return (
        <Container>
            <h1> Surveys page </h1>
            <div className='surveys-filter-buttons'>
            <Button
          className={`button-filter guest ${activeClass('guest')}`}
          text='Guest'
          color='var(--color-text-accent)'
          onClick={() => setActive('guest')}
          datatestid='button-guest'
        />
        <Button
          className={`button-filter assistant ${activeClass('assistant')}`}
          text='Assistant'
          color='var(--color-text-accent)'
          onClick={() => setActive('assistant')}
          datatestid='button-assistant'
        />
        </div>
            <div>
                {loading ? (
                    <img src={loadingIndicator} alt='animated loading indicator' />
                ) : data ? (
                data.map((survey: Survey) => 
                    (<div className='survey' key={survey.id}>{survey.name}</div> 
                ))
            ) : null}
            </div>
        </Container>
    )
}

export default Surveys
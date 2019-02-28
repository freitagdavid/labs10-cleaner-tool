import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useFetch } from '../../helpers';
import { Survey } from './types';
import loadingIndicator from '../utils/loading.svg';


const Surveys = () => {
    const url =
    process.env.REACT_APP_backendURL || 'https://labs10-cleaner-app-2.herokuapp.com';
    const [data, err, loading] = useFetch(`${url}/surveys`)

    console.log(data)

    return (
        <div>
            <h1> Surveys page </h1>
            <div>
                {loading ? (
                    <img src={loadingIndicator} alt='animated loading indicator' />
                ) : data ? (
                data.map((survey: Survey) =>
                    
                    (<div className='survey' key={survey.id}>{survey.name}</div>
                ))
            ) : null}
            </div>
        </div>
    )
}

export default Surveys
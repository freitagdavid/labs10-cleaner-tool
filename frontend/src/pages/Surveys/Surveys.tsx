import React from 'react';
import axios from 'axios';
import { useFetch } from '../../helpers';
import { Survey } from './types';
import loadingIndicator from '../utils/loading.svg';


const Surveys = () => {
    const url =
    process.env.REACT_APP_backendURL || 'https://labs10-cleaner-app-2.herokuapp.com';
    // const [data, err, loading] = useFetch(`${url}/surveys`)

    return (
        <>
            <h1> Surveys page </h1>
            <div>
                {/* {loading ? (
                    <img src={loadingIndicator} alt='animated loading indicator' />
                ) : data ? (
                data.map((survey: Survey) => 
                    (<div className='survey' key={survey.id}>{survey.name}</div> 
                ))
            ) : null} */}
            </div>
        </>
    )
}

export default Surveys
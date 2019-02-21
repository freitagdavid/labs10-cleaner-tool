import React from 'react';
import axios from 'axios';
import { useFetch } from '../../helpers';
import { Survey } from './types';

const Surveys = () => {
    const url =
    process.env.REACT_APP_backendURL || 'https://labs10-cleaner-app-2.herokuapp.com';
    const [surveys] = useFetch(`${url}/surveys`)
    console.log(surveys)

    return (
        
        <div>
            Surveys page
           {/* {surveys.map((survey: Survey) => <div className='survey' key={survey.id}>{survey.name}</div>)} */}
        </div>
    )
}

export default Surveys
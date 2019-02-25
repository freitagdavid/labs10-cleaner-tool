import React, { useState } from 'react';
import SurveyQuestion from './SurveyQuestion'
const CreateSurvey = () => {
    return (
    <div>
        <form>
            <h1>Create a Survey</h1>
            <h2>Survey Name</h2>
            <input type = 'text' placeholder = 'Survey Name'/>
            <div>
                <h3>Survey Type:</h3>
                <button>Guest Survey</button>
                <button>Assitant Survey</button>
                <h3>How Many Questions:</h3>
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <SurveyQuestion />
            <div>
                <button>Save</button>
                <button>Cancel</button>
            </div>
        </form>
    </div>
    )
}
export default CreateSurvey
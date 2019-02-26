import React, {useState} from 'react';
import SurveyQuestion from './SurveyQuestion'

const CreateSurvey = ()=>{
    const [dropdown, setDropdown] = useState(3)
    const [surveyName, setSurveyName] = useState('')
    const [isGuest, setIsGuest] = useState(true)
    const url = process.env.REACT_APP_backendURL || 'https://labs10-cleaner-app-2.herokuapp.com';
    const handleDropdown = (ev: any) =>{
        setDropdown(ev.target.value)
    }
    const handleSurveyName = (ev:any) =>{
        setSurveyName(ev.target.value)
    }
    const questionLength = () =>{
        let survey = [];
        for(let i = 1; i<=dropdown; i++){
            survey.push(<SurveyQuestion key = {i} questionNumber = {i}/>)
        }
        return survey
    }

        return (
            <div>
                <form>
                    <h1>Create a Survey</h1>
                    <h2>Survey Name</h2>
                    <input type='text' placeholder='Survey Name' onChange = {handleSurveyName}/>
                    <div>
                        <h3>Survey Type:</h3>
                        <button type = 'button'>Guest Survey</button>
                        <button type = 'button'>Assitant Survey</button>
                        <h3>How Many Questions:</h3>
                        <select defaultValue = '3' onChange={handleDropdown}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        {questionLength()}
                    </div>
                    <div>
                        <button>Save</button>
                        <button>Cancel</button>
                    </div>
                </form>
            </div>
        )
    
}
export default CreateSurvey
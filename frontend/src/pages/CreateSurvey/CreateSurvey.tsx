import React, {useState} from 'react';
import SurveyQuestion from './SurveyQuestion'
import { CreateSurveysWrapper, CreateSurveyLables, CreateSurveyInput, SurveyOptions, SurveyType, SurveyTypeButton, SurveyQuestions, CreateSurveyButtonWrapper } from './CreateSurvey.styling';
import './createsurvey.css' 
import { ActionEvent } from 'material-ui/svg-icons';

const CreateSurvey = ()=>{
    const [dropdown, setDropdown] = useState(3)
    const [surveyName, setSurveyName] = useState('')
    const [isGuest, setIsGuest] = useState(true)
    const [activeSurvey, setActiveSurvey] = useState('')
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

    const toggleClass = () => {

    }
    
        return (
            <CreateSurveysWrapper>
                <form>
                    <h1>Create a Survey</h1>
                    <CreateSurveyLables>Survey Name</CreateSurveyLables>
                    <CreateSurveyInput type='text' placeholder='Survey Name' onChange = {handleSurveyName}/>
                    <SurveyOptions>
                        <SurveyType>Survey Type:</SurveyType>
                        <SurveyTypeButton type = 'button'>Guest Survey</SurveyTypeButton>
                        <SurveyTypeButton type = 'button'>Assitant Survey</SurveyTypeButton>
                        <SurveyQuestions>How Many Questions:</SurveyQuestions>
                        <select defaultValue = '3' onChange={handleDropdown}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </SurveyOptions>
                    <div>
                        {questionLength()}
                    </div>
                    <CreateSurveyButtonWrapper>
                        <button>Save</button>
                        <button>Cancel</button>
                    </CreateSurveyButtonWrapper>
                </form>
            </CreateSurveysWrapper>
        )
    
}
export default CreateSurvey
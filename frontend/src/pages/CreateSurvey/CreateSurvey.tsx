import React, {useState} from 'react';
import SurveyQuestion from './SurveyQuestion'
const CreateSurvey = ()=>{

    const [dropdown, setDropdown] = useState(1)
    const handleDropdown = (ev: any) =>{
        setDropdown(ev.target.value)
    }
    const questionLength = () =>{
        let survey = [];
        for(let i = 1; i<=dropdown; i++){
            survey.push(<SurveyQuestion questionNumber = {i}/>)
        }
        return survey
    }
        return (
            <div>
                <form>
                    <h1>Create a Survey</h1>
                    <h2>Survey Name</h2>
                    <input type='text' placeholder='Survey Name' />
                    <div>
                        <h3>Survey Type:</h3>
                        <button>Guest Survey</button>
                        <button>Assitant Survey</button>
                        <h3>How Many Questions:</h3>
                        <select onChange={handleDropdown}>
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
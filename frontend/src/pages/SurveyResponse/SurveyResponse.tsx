 import React, {useEffect, useState} from 'react';
 import axios from 'axios';
 import { useFetch } from '../../helpers';
 import loadingIndicator from '../utils/loading.svg';

 import Responses from './Responses';
<<<<<<< HEAD
// import console = require('console');
=======
 import './SurveyResponse.css';
>>>>>>> a98c8ac4eca372b5b2ff5930c146a7ede1c053c0
 
const SurveyResponse = (props:any) => {

const url =
process.env.REACT_APP_backendURL || 'https://labs10-cleaner-app-2.herokuapp.com';

<<<<<<< HEAD
const [response, err, loading] = useFetch(`${url}/surveyresponses/1`, true, 'get');
console.log(response)
=======
const [response, err, loading] = useFetch(`${url}/surveyresponses/${props.match.params.id}`, true, 'get');

let surveyName = () => {
    if(response.survey.length === 0){
        return("No Surveys Here");
    }else{
        return(`${response.survey[0].name} - Responses`);
        }
    }
          
>>>>>>> a98c8ac4eca372b5b2ff5930c146a7ede1c053c0
if (loading === true) {
    return(
        <img src = {loadingIndicator} />
    )} else {
        return(
            <div className = 'sr-container'>
                <div className = 'sr-title'>
                    <h1>{surveyName()}</h1>
                    {console.log(response.survey)}
                    <select name="properties">
                        <option value="title">Filter By Property</option>
                        <option value="property1">Property1</option>
                        <option value="property2">Property2</option>
                        <option value="property3">Property3</option>
                    </select>
                </div>  
                
                {response.survey.map((survey: any) =>
                <Responses key={survey.id} survey={response.survey} sr_name="Guest Name" sr_date='02-24-19' sr_img='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAATlBMVEWeo7n///+boLeXnLSZnrWVm7PEx9SussTx8vXk5evS1N76+vvHytahpruytsft7vLZ2+OorMDU1t+8v86xtcbi4+m5vMyqrsHHydbp6u9SQQMhAAAGNklEQVR4nO2c63aqMBBGMQl3UBDB+v4veuJpbS2CfJPLVNea/bsL98mZJJPbJLv3JPlrAUfEmxfx5kW8eRFvXsSbF/HmRbx5EW9exJsX8eZFvHkRb17Emxfx5kW8eRFvXsSbF/HmRbx5EW9exJsX8eZFvO8oLl1VNVmWNU3VlUUd4ScCe9djM7VGa6NuGEt7asYi7A+F9C6z3ljh5JGrfjKMARs+mPc4Gb2kfCdv9L4LpR7Gu8jUhvRN3QyXIL8Ywrs8QdJf6rrvAvymv3d5Jlj/R7f+5r7eh1zTpP9j2vFPveshJbb1d5vnfgOjl3e3OOhhKN38kXd9Ms7WV0zr0eTu3qNHY3+RVvzeHy798aHJJ25vzxi5oVxjxc27br1j5CZu3OZPJ+8iCaVt0U5DuYv3IaC1JXWZPR28D2FC20+c7l2Ebe3/4vRQIXvX4bWtOLlzkr2DjSS/MNThkOq9j6KdJG1c7yZ0n7yhTjG9yzSSth3GabkKyTtKn/wWP0TzjhXcn5BCnOLdhUgB11FZHO86Vp+8kRIiheA9RI2SK30M70PcKLmi8UQF986jN7clvPclfnPb6R4exGFvluZOVGhvluYmNDjqHXfK+QGdfEDvgqe58dUm6N0wNXei8qDeTNaWFFtBYN4lV5jYBsd6JuYdf4r/AZvsMW9G7URDgQJ5M4YJGiiQ9wdne2MrTci7Z9S2c2Yo7+gLht9oZBMI8WYNbzDAEe+KM7ytN3IIgXhPvN7Q6gH5m5ZZOw3kHW+TahlkBwjwZsthbxgglwW8mZY6PyADCuA98g7f1hs4AQe8j+zeQxBv5uEbG8ABb7Y12rc3kFkB3hm7N7DGFO+X8+aP73f13gfx5h8Hw4zfHfu8Axz0AN4lu3eY/KTg9jbAcQngXbPn38DCGFk3cPdLDVy2RrxPzOLIBgrizTxhQlvgiDfzQIgsGyBv5gUmsrzE9gdZtaFuiXlzbtuDG/eQN2uAY9c5IO+aM8B1Gcx7d2b0xo66MW/GrQgkiYW9GQPFQGGCnrtyHc8n6BUU8M/YcnDw2BW+D8G1Bw5NOgRvpp4J9krCfR+eAMcOiyneFUeDQ0dSNG+W5Aq8xEHyjnzL9Aoc3aT7mvFPuw3+ipfgfYm9rsdvD9LuI8dOwwnXY2n3v+Nqw2Mg2TvqBQNKlFDfN2TxBnH0Ap6T966PFuKKVhGA6B3tZQZ0WcbdO9ahtz4SPcjvvLoYo7ihPMlw895V4Vvc4Zmxw/vLJrQ4cg4VwDvMU+4fDPFpmrN32BZ3e4vu9p77GK5zanKX9PDejaFa3LVkgeu7/yLIu1cF7vKE897t9v65iumdy/141OM4UuvMzHEMbV/vXXH2iXLT+lQo8qs3czSuTa5Sr7ItvvV96sEpWJTee9YPo3kX1Xme3hcT2Vzp8zxEhnNF+4dQ3rtWvQ2Lx4olRHOl84fAzo1S5nwkjC6wd5ffSic9XleoGwUG+rVg2MOt3cNXWRKVnuCHo5j3ZbgXWxq/xr3eVFcmXWrTu8TY/kqGPTJGvI/9LBAWq9vU3aT0aq0ipbQ5LQVCPSvcZYMfafRN7yIzCxPjSvGpQzW1n8UH74Rt6Ork1CzP6N3C/5JRzWakb3hf1vrc+qxRX7pmOPU2WlPbI/p8+jiWa2NFsVIlTZlpI1yeej8tGec9BO922frnlT49nU6feI/zsH5olMyrCmL1vHCXDfQnyeKq93jezveU2Q7ENY7J5vcX5qct7wuYMqk0c4mW64APfV7nK3G+6F3s8UTPfppaVagkTLBKT4sNs+BNzZWukwWekh6alvr5D8i7cshN7YQDVVktM6L059fV40w09770jssvO7mcn1W3rcsm36rUuoo+z8N85j14rdNt1qTyrBoP9/r1YTxm+0QvV8RFvzzPiX55+9Sd/P6F67SuU5O0fd+3rUrtvO+lfPtuMq541wFW6DHR06L3UobzWig1PnjXhCH779DDzLsMWQkxIqo93Htn3Fe83fnav7h610AK9TqYvP70Hl++Q/5GqcvVu3mfGLmRVrvkxQftZczwJuPInPe0FgRBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEF6ef4VTa9SToXfiAAAAAElFTkSuQmCC' />
                )}
                 {console.log(response.survey)}
            </div>
            )    
        }
    }
    


export default SurveyResponse;
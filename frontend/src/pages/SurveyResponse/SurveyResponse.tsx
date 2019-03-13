 import React, {useEffect, useState} from 'react';
 import axios from 'axios';
 import { useFetch } from '../../helpers';
 import loadingIndicator from '../utils/loading.svg';

 import Responses from './Responses';
 import SRHeader from './SRHeader';
 import Properties from './Properties';
 import './images/profile_pic_default.png';
 import './SurveyResponse.css';
 
const SurveyResponse = (props:any) => {
const [data, setData] = useState([])
const [matches, setMatches] = useState(false);
const url = process.env.REACT_APP_backendURL || 'https://labs10-cleaner-app-2.herokuapp.com';

    
    useEffect(() => {
        (async () => {
            const headers: any = {
                headers: {
                    Authorization: localStorage.getItem('token'),
                },
            };
            const response = await axios.get(`${url}/stay/surveys/${1}`, headers)
            console.log(response)
            setData(response.data)
        })()
    }, []);

//     let guestPic = () => {
//         let sIndex = -1;
//         for(let i=0; i< response.survey.length; i++){
//             sIndex += 1;
//         if(response.survey[sIndex].photo === null){
//             response.survey[sIndex].photo = "https://nahealth.com/sites/default/files/styles/max_image_size/public/var/sites/nah/sites/default/files/media/profile-placeholder_0_0_0_0.png?itok=ywlRw7Li";
//             }else{
//                 response.survey[sIndex].photo = response.survey[sIndex].photo;
//             }
//         } 
//     }

// console.log(data)

// let changeHandler = (e:any) => {
//     e.preventDefault();
//     setMatches(true);
//     setProperty(property = e.target.value);
//     if(property === "title"){
//         setMatches(false);
//     }
// }


// let filteredSurveys = () => {
//     let propertyMatches = [];
//     if(matches===false){
//         propertyMatches = response.survey;
//     }else{
//         for(let i=0; i<response.survey.length; i++){
//             if(matches===true && property === response.survey[i].house_name){
//                 propertyMatches.push(response.survey[i]);
//             }
//         }
//     }
    
//     return propertyMatches;
// }
return(
    <div></div>
)

// if (loading === true) {
//     return(
//         <img src = {loadingIndicator} />
//     )}else{
//         return(
//             <div className = 'sr-container'>
//                 <SRHeader surveys = {response.survey} />
//                 <Properties surveys = {response.survey} changeHandler ={changeHandler}/> 
//                 {filteredSurveys().map((survey: any) =>
//                 <Responses key={survey.id} survey={response.survey} 
//                 sr_name={survey.guest_name} sr_date={survey.created_at} 
//                 guestPic={guestPic()} sr_img={survey.photo} 
//                 question={survey.question} answer={survey.answer} 
//                 answerType={survey.answer_type}/>
//                 )}
//                  {console.log(response.survey)}
//             </div>
//             )    
//         }
}
    


export default SurveyResponse;
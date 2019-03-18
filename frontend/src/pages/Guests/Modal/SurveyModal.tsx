import React, {useState} from 'react';
import Button from '../../../components/Button';
import { useFetch } from '../../../helpers';
import loadingIndicator from '../../utils/loading.svg';
import {ModalContainer, SurveySelectButton} from './SurveyModal.styling'
import {axiosFetch} from '../../../helpers'
 interface Survey {
  survey: any,
  id: number,
  name: string,
  isGuest: boolean | number,
}
//style vars
const active = {
  text: '--color-button-text',
  bg: "--color-accent"
};
const inactive = {
  text: "--color-button-text-alt",
  bg: "--color-button-background-alt"
}
//logs data and closes modal will make axios call later


export const Modal = ( props: any) => {
    const showHideClassName = !props.show ?  "modal display-none" : "modal display-flex";
    const url =
    process.env.REACT_APP_backendURL || 'https://labs10-cleaner-app-2.herokuapp.com'
    const [data, err, loading] = useFetch(`${url}/surveys`)
    const [selected, setSelected]= useState({surveyId:0,stayId:0})
    const selectAndClose = (data: any,func: any)=>{ axiosFetch(  'post',`${url}/stays/surveys`,  data); func()}
    return (
      <div className={showHideClassName}>   
        <ModalContainer>
            <div className="modal-content-container"> 
              <h3>Surveys</h3>
              {loading ? (
                  <img src={loadingIndicator} alt='animated loading indicator' />
                ) : data ? (
                  data.filter((survey:Survey)=>survey.isGuest === true || survey.isGuest === 1).map((survey: Survey) => 
                    (
                      <>
                    <div className='survey-card' key={survey.id}>
                        <h3>{survey.name}</h3>
                        <p>{survey.isGuest}</p>
                    </div>
                    <SurveySelectButton
                    theme={selected.surveyId ===survey.id ? active: inactive } 
                    onClick= {() =>{setSelected({surveyId:survey.id, stayId:props.stay_id})}}
                    >Select</SurveySelectButton>
              </>
                ))
              ) : null}
            </div>
            <div className= 'modal-buttons-container'>
              <Button
                      className='back'
                      text= 'Close'
                      color='red'
                      onClick={props.modal}
                />
                <Button
                      className='back'
                      text= 'Send Survey'
                      color='var(--color-button-background)'
                      onClick={()=>{selectAndClose(selected, props.modal)}}
                />
              </div>
        </ModalContainer>
      </div>
    );
  };

 
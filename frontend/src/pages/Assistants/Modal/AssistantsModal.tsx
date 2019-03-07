import React, {useState} from 'react';
import Button from '../../../components/Button';

import { useFetch } from '../../../helpers';
import loadingIndicator from '../../utils/loading.svg';
import {ModalContainer, SurveySelectButton} from './AssistantsModal.styling'
 interface Survey {
  survey: any,
  id: number,
  name: string,
  isGuest: number,
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
const selectAndClose = (data: any,func: any)=>{console.log(data); func()}

export const SurveyModal = ( props: any) => {
    const showHideClassName = !props.show ?  "modal display-none" : "modal display-flex";
    const url =
    process.env.REACT_APP_backendURL || 'https://labs10-cleaner-app-2.herokuapp.com'
    const [data, err, loading] = useFetch(`${url}/surveys`)
    const [selected, setSelected]= useState({})
    return (
      <div className={showHideClassName}>   
        <ModalContainer>
            <div className="modal-content-container"> 
              <h3>Surveys</h3>
              {loading ? (
                  <img src={loadingIndicator} alt='animated loading indicator' />
                ) : data ? (
                  data.filter((survey:Survey)=>survey.isGuest === 0).map((survey: Survey) => 
                    (
                      <>
                    <div className='survey-card' key={survey.id}>
                        <h3>{survey.name}</h3>
                        <p>{survey.isGuest}</p>
                    </div>
                    <SurveySelectButton
                    theme={selected===survey ? active: inactive } 
                    onClick= {() =>{setSelected(survey)}}
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
                      onClick={()=>selectAndClose(selected, props.modal)}
                />
              </div>
        </ModalContainer>
      </div>
    );
  };
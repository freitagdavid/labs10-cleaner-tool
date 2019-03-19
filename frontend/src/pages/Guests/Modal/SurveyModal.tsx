import React, { useState, FormEvent } from 'react';
import Button from '../../../components/Button';
import { useFetch } from '../../../helpers';
import loadingIndicator from '../../utils/loading.svg';
import { ModalContainer, SurveySelectButton } from './SurveyModal.styling'
import { axiosFetch } from '../../../helpers'
import { number } from 'yup';
import { Checkbox } from '@material-ui/core';
import firebase from 'firebase/app'
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

interface SurveySubmit {
  surveyId: number; stayId: number;
}

export const Modal = (props: any) => {
  const showHideClassName = !props.show ? "modal display-none" : "modal display-flex";
  const [buttonState, setButtonState] = useState(true);
  const { email } = props;
  let buttonEnabled = false;
  const url =
    process.env.REACT_APP_backendURL || 'https://labs10-cleaner-app-2.herokuapp.com'
  const [data, err, loading] = useFetch(`${url}/surveys`)
  const [selected, setSelected] = useState([] as SurveySubmit[])
  const selectAndClose = (e: any, data: any, func: any) => {
    e.preventDefault();
    axiosFetch('post', `${url}/stays/surveys`, data);
    {
      const actionCodeSettings = {
        url: `http://${window.location.hostname}/linklogin?redir=survey&isguest=true&id=${props.stay_id}`,
        handleCodeInApp: true,
      };
      firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings).then().catch((e) => console.log(e))
    }
    func()
  }

  let toggleButton = (e: FormEvent, currentState: boolean) => {
    e.preventDefault();
    buttonEnabled = !currentState
  }

  const handleClick = (item: SurveySubmit) => {
    setSelected([...selected, item])
  }

  return (
    <div className={showHideClassName}>
      <ModalContainer>
        <div className="modal-content-container">
          <h3>Surveys</h3>
          <form onSubmit={(e) => selectAndClose(e, selected, props.modal)}>
            {loading ? (
              <img src={loadingIndicator} alt='animated loading indicator' />
            ) : data ? (
              data.filter((survey: Survey) => survey.isGuest === 1).map((survey: Survey) =>
                (
                  <div key={`surveylabel${survey.id}`}>
                    <Checkbox type="checkbox" name={survey.name} value={`${survey.id}`} onChange={() => handleClick({ surveyId: survey.id, stayId: props.stay_id })} />
                    <label htmlFor={survey.name}>{survey.name}</label>
                  </div>
                ))
            ) : null}
            <Button disabled={buttonEnabled} type="submit" text="Submit" onClick={(e) => toggleButton(e, buttonEnabled)} />
            <Button type="null" onClick={props.modal} color='var(--color-error)'>Close</Button>
          </form>
        </div>
      </ModalContainer>
    </div>
  );
};


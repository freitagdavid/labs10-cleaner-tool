import React, {useState} from 'react';
import Button from '../../../components/Button';
import { useFetch } from '../../../helpers';
import loadingIndicator from '../../utils/loading.svg';

 interface Survey {
  survey: any,
  id: number,
  name: string,
  isGuest: number,
}

export const Modal = ( props: any) => {
    const showHideClassName = !props.show ?  "modal display-none" : "modal display-block";
    const url =
    process.env.REACT_APP_backendURL || 'https://labs10-cleaner-app-2.herokuapp.com'
    const [data, err, loading] = useFetch(`${url}/surveys`)
    const [selected, setSelected]= useState({})
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div>
            {loading ? (
                 <img src={loadingIndicator} alt='animated loading indicator' />
              ) : data ? (
                data.filter((survey:Survey)=>survey.isGuest === 1).map((survey: Survey) => 
                  (
                    <>
                   <div key={survey.id}>
                       <h3>{survey.name}</h3>
                       <p>{survey.isGuest}</p>
                  </div>
                  <Button
                  className='back'
                  text= 'select'
                  color='red'
                  onClick= {() =>{setSelected(survey)}}
            />
            </>
              ))
            ) : null}
          </div>
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
                   onClick={()=>console.log(selected)}
            />
        </section>
      </div>
    );
  };

 
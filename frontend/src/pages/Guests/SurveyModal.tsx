import React from 'react';
import Button from '../../components/Button';

export const Modal = ( props: any) => {
    const showHideClassName = !props.show ?  "modal display-none" : "modal display-block";
    console.log(props.show)
    console.log(props.modal)
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <h3>surveys here</h3>
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
                //   onClick={props.modal}
            />
        </section>
      </div>
    );
  };

 
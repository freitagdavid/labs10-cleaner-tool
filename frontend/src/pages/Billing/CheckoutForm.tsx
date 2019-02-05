import React, { FormEvent, useContext, useState } from 'react';
import {
  ReactStripeElements,
  injectStripe,
  CardElement,
} from 'react-stripe-elements';
import { Button } from '../../components/index';
import axios, { AxiosRequestConfig } from 'axios';
import { BillingContext } from './Billing';
import loadingIndicator from '../utils/loading.svg';

const url =
  process.env.REACT_APP_backendURL || 'https://cleaner-pos.herokuapp.com';

const headers: AxiosRequestConfig = {
  headers: { Authorization: localStorage.getItem('token') },
};

const CheckoutForm = (props: ReactStripeElements.InjectedStripeProps) => {
  // @ts-ignore
  const { setConfirm, setShownIndex } = useContext(BillingContext);
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<any>(0);
  const handleSubmit = async (ev: FormEvent) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();
    setLoading(true);
    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    try {
      // @ts-ignore
      const { token } = await props.stripe.createToken({});
      const response = await axios.post(
        `${url}/payments`,

        {
          // @ts-ignore
          token: token.id,
          plan_id: plan === 1 ? 1 : process.env.REACT_APP_stripe_plan,
        },
        headers,
      );
      localStorage.setItem('subscription', response.data.plan);
      setLoading(false);
      setConfirm({ confirm: response.data });
      setShownIndex(1);
    } catch (e) {
      console.log(e);
    }
    /* tslint:disable-next-line */
  };

  return (
    <div>
      <div className='list-checkbox pretty p-default p-round p-smooth'>
        <input
          type='checkbox'
          name='plan1'
          onClick={(e) => setPlan(1)}
          checked={plan === 1 ? true : false}
          readOnly
        />
        <div className='state p-primary-o'>
          <label htmlFor='plan2' onClick={() => 'hello'}>
            Lodgel Basic: FREE*
          </label>
        </div>
      </div>
      <br />
      <br />
      <div className='list-checkbox pretty p-default p-round p-smooth'>
        <input
          type='checkbox'
          name='plan2'
          onClick={(e) => setPlan(2)}
          checked={plan === 2 ? true : false}
          readOnly
        />
        <div className='state p-primary-o'>
          <label htmlFor='plan2' onClick={() => 'hello'}>
            Lodgel Professional: 99$ / Month
          </label>
        </div>
      </div>
      <br />
      <br />
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: '350px', margin: 'auto' }}
        data-testid='checkout-form'
      >
        <label>
          Card details
          <br />
          <br />
          <CardElement />
        </label>
        <div style={{ marginBottom: '24px' }} />
        <Button
          onClick={handleSubmit}
          text={loading ? '' : 'Subscribe!'}
          datatestid='confirm-payment'
          disabled={plan === 0 ? true : false}
        >
          <div
            role='alert'
            aria-live='assertive'
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            {loading ? (
              <img src={loadingIndicator} alt='animated loading indicator' />
            ) : null}
            <p style={{ display: 'none' }}>Content is loading...</p>
          </div>
        </Button>
      </form>
    </div>
  );
};

export default injectStripe(CheckoutForm);

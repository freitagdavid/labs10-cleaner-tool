import React from 'react';
import MyStoreCheckout from '../Billing/Checkout';
import { StripeProvider } from 'react-stripe-elements';
import 'jest';
import 'jest-dom/extend-expect';
import { cleanup, render } from 'react-testing-library';
import {UserContextProvider} from '../../UserContext';

afterEach(cleanup);

describe('Stripe Button', () => {
  test('should render a button', () => {
    const { container } = render(
      // @ts-ignore
      <UserContextProvider>
        <StripeProvider stripe={null}>
          <MyStoreCheckout />
        </StripeProvider>,
      </UserContextProvider>,
    );
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeTruthy();
  });
  test('should carry type button', () => {
    const { container } = render(
      <UserContextProvider>
        <StripeProvider stripe={null}>
          <MyStoreCheckout />
        </StripeProvider>
      </UserContextProvider>,
    );
    const button = container.querySelector('button');

    expect(button).toHaveAttribute('type', 'button');
  });
  test('should have text "Pay With Card"', () => {
    const { getByText } = render(
      <UserContextProvider>
        <StripeProvider stripe={null}>
          <MyStoreCheckout />
        </StripeProvider>
      </UserContextProvider>,
    );
    const button = getByText(/Subscribe/i);
    expect(button).toHaveTextContent('Subscribe!');
  });
});

describe('future accordion component', () => {
  test('should display subscription plans', () => {
    const { getByText, debug } = render(
      <UserContextProvider>
        <StripeProvider stripe={null}>
          <MyStoreCheckout />
        </StripeProvider>
      </UserContextProvider>,
    );
    const basePlan = getByText(/lodgel basic/i);
    const advPlan = getByText(/lodgel professional/i);
    expect(basePlan).toHaveTextContent('Lodgel Basic: FREE*');
    expect(advPlan).toHaveTextContent('Lodgel Professional');
  });

  test.skip('should render a form component', () => {
    const { getByTestId } = render(
      <UserContextProvider>
        <StripeProvider stripe={null}>
          <MyStoreCheckout />
        </StripeProvider>
      </UserContextProvider>,
    );
    const form = getByTestId('checkout-form');
    expect(form).toBeInTheDocument();
    expect(form).toHaveStyle('margin: auto;');
  });
});

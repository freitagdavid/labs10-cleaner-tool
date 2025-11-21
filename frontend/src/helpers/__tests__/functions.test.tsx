import React from 'react';
import { render } from 'react-testing-library';
import { useEffectAfterMount, renderWithRouter } from '../functions';

const flushPromises = () => new Promise((resolve) => setTimeout(resolve, 0));

describe('helpers/functions', () => {
  test('renderWithRouter renders children with provided route', () => {
    const {
      getByText,
      history: { location },
    } = renderWithRouter(<div>Dashboard</div>, { route: '/dashboard' });

    expect(getByText('Dashboard')).toBeDefined();
    expect(location.pathname).toBe('/dashboard');
  });

  test('useEffectAfterMount skips initial render and responds to updates', async () => {
    const spy = jest.fn();

    const TestComponent = ({ value }: { value: string }) => {
      useEffectAfterMount(() => spy(value), [value]);
      return <div>{value}</div>;
    };

    const { rerender } = render(<TestComponent value="initial" />);
    await flushPromises();
    expect(spy).not.toHaveBeenCalled();

    rerender(<TestComponent value="updated" />);
    await flushPromises();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('updated');
  });
});

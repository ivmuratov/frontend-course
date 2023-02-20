import { DeepPartial } from '@reduxjs/toolkit';
import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { StateSchema } from 'app/providers/StoreProvider';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

const mockState: DeepPartial<StateSchema> = {
  counter: {
    value: 10,
  },
};

describe('Counter', () => {
  it('test render', () => {
    componentRender(<Counter />, {
      initialState: mockState,
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });
  it('increment', () => {
    componentRender(<Counter />, {
      initialState: mockState,
    });
    userEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });
  it('decrement', () => {
    componentRender(<Counter />, {
      initialState: mockState,
    });
    userEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});

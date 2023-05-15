import { FC } from 'react';
import { Button } from '@/shared/ui/deprecated/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter: FC = () => {
  const counterValue = useCounterValue();

  const { decrement, increment } = useCounterActions();

  return (
    <>
      <h1 data-testid='value-title'>{counterValue}</h1>
      <Button data-testid='increment-btn' onClick={increment}>
        +
      </Button>
      <Button data-testid='decrement-btn' onClick={decrement}>
        -
      </Button>
    </>
  );
};

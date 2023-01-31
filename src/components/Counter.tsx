import { FC, useState } from "react";
import classes from './Counter.module.scss';

const Counter: FC = () => {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(prev => prev + 1);
    };

    const decrement = () => {
        setCount(prev => prev - 1);
    };

    return ( 
        <div className={classes.counter}>
            <div>{count}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default Counter;
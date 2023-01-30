import { FC, useState } from "react";
import './App.scss';

const App: FC = () => {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(prev => prev + 1);
    };

    const decrement = () => {
        setCount(prev => prev - 1);
    };

    return ( 
        <div className="app">
            <div>{count}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default App;
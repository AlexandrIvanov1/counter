import React, {useState} from 'react';
import './App.css';
import {CounterValue} from "./CounterValue";
import {Button} from "./Button";

function App() {

    let [count, setCount] = useState(0)

    const maxCount = 5

    const incCount = () => setCount(count + 1)

    const resetCount = () => setCount(0)


    return (
        <div className={'wrapper'}>

            <CounterValue count={count} maxCount={maxCount}/>

            <div className={'window-button'}>
                <Button name={'inc'} disabled={count === maxCount} changeCount={incCount}/>
                <Button name={'reset'} disabled={!count} changeCount={resetCount}/>
            </div>
        </div>
    );
}

export default App;

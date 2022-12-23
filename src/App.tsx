import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {CounterValue} from './CounterValue';
import {Button} from './Button';
import {Input} from './Input';

function App() {

    const [minCount,setMinCount] = useState(0)

    let [count, setCount] = useState(minCount)

    let [maxCount, setMaxCount] = useState(5)

    let [settingsMode, setSettingsMode] = useState(false)

    let [error, setError] = useState<string | boolean>(false)

    useEffect(() => {
        let minCount = localStorage.getItem('minCounter value')
        if (minCount) {
            setMinCount(JSON.parse(minCount))
            setCount(JSON.parse(minCount))
        }
        let maxCount = localStorage.getItem('maxCounter value')
        if (maxCount) {
            setMaxCount(JSON.parse(maxCount))
        }
    }, [])

    const incCount = () => setCount(count + 1)

    const resetCount = () => setCount(minCount)


    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSettingsMode(true)
        setMaxCount(+e.currentTarget.value)
        if (+e.currentTarget.value <= minCount) {
            setError('Incorrect value!')
        } else {
            setError(false)
        }
    }

    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSettingsMode(true)
        setMinCount(+e.currentTarget.value)
        setCount(minCount)
        if (+e.currentTarget.value < 0 || +e.currentTarget.value >= maxCount) {
            setError('Incorrect value!')
        } else {
            setError(false)
        }
    }

    const setValue = () => {
        setSettingsMode(false)
        setCount(minCount)
        localStorage.setItem('minCounter value', JSON.stringify(minCount))
        localStorage.setItem('maxCounter value', JSON.stringify(maxCount))
    }

    return (
        <div className={'content'}>
            <div className={'new-wrapper-counter'}>
                <div className={'window-settings'}>
                    <Input title={'start value'} count={minCount} error={error} onChangeCount={onChangeStartHandler}/>
                    <Input title={'max value'} count={maxCount} error={error} onChangeCount={onChangeMaxHandler}/>
                </div>
                <div className={'window-button-new'}>
                    <Button name={'set'} disabled={!settingsMode || !!error} changeCount={setValue}/>
                </div>
            </div>

            <div className={'wrapper-counter'}>

                {!settingsMode
                    ? <CounterValue count={count} maxCount={maxCount}/>
                    : error ? <div className={'settings error'}>{error}</div> : <div className={'settings'}>enter values and press 'set'</div>
                }

                <div className={'window-button'}>
                    <Button name={'inc'} disabled={count === maxCount || settingsMode} changeCount={incCount}/>
                    <Button name={'reset'} disabled={!count || minCount === count || settingsMode} changeCount={resetCount}/>
                </div>
            </div>
        </div>
    );
}
export default App;
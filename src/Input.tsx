import React, {ChangeEvent} from 'react';

type InputType = {
    title: string
    count: number
    error: string | boolean
    onChangeCount: (e: ChangeEvent<HTMLInputElement>) => void
}
export const Input: React.FC<InputType> = (props) => {
    return (
        <div className={'text-value'}>
            {props.title}:
            <input
                type="number"
                className={`input ${props.error ? 'error-input' : ''}`}
                onChange={props.onChangeCount}
                value={props.count}/>
        </div>
    )
}
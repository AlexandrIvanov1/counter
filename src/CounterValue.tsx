import React from 'react';

type CounterValueType = {
    count: number
    maxCount: number
}

export const CounterValue: React.FC<CounterValueType> = (props) => {

    const {count, maxCount} = props

    return (
        <div className={count !== maxCount ? 'window-count' : `window-count + max-count`}>
            {count}
        </div>
    );
};

import React from 'react';

type NewButtonType = {
    name: string
    disabled: boolean
    changeCount: () => void
}

export const Button: React.FC<NewButtonType> = (props) => {

    const {name, disabled, changeCount} = props

    return (
        <>
            <button
                onClick={changeCount}
                disabled={disabled}
                className={!disabled ? `button` : `button + disabled`}
            >
                {name}
            </button>
        </>
    );
};

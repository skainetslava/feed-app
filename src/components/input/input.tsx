import * as React from 'react';

import './input.scss';


export interface ICallbackObject {
    value: string
}

interface IInputProps {
    value: string,
    placeholder?: string,
    disabled?: boolean,
    onChange?:(result: object) => void,
    onEnter?:() => void
}


const Input: React.SFC<IInputProps> = ({ value, placeholder, disabled, onChange, onEnter }) => {
    const handleOnKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleOnEnter(event);
        }
    }

    const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
        return onChange && onChange({ value: event.currentTarget.value });
    }

    const handleOnEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        return onEnter && onEnter();
    }
    return <input
        className="todo-input"
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleOnChange}
        onKeyPress={handleOnKeyPress}
    />
};

export default Input;
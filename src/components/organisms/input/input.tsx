import * as React from "react";
import cls from 'classnames';

import "./input.scss";


export interface ICallbackObject {
    value: string
}

interface IInputProps {
    placeholder?: string,
    disabled?: boolean,
    onChange?: (value: string) => void,
    onEnter?: () => void
}


const Input: React.SFC<IInputProps> = ({ placeholder, disabled, onChange, onEnter }) => {
    const [value, setValue] = React.useState<string>("");

    const handleOnKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleOnEnter(event);
        }
    }

    const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
        return onChange && onChange(event.currentTarget.value);
    }

    const handleOnEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        return onEnter && onEnter();
    }
    return <input
        className={cls("input")}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleOnChange}
        onKeyPress={handleOnKeyPress}
    />
};

export default Input;

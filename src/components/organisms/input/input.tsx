import * as React from "react";
import cls from 'classnames';

import "./input.scss";


export interface ICallbackObject {
    value: string
}

interface IInputProps {
    value: string,
    placeholder?: string,
    disabled?: boolean,
    onChange?: (value: string) => void,
    onEnter?: (value: string) => void
}


const Input: React.SFC<IInputProps> = ({ value, placeholder, disabled, onChange, onEnter }) => {
    const [localValue, setValue] = React.useState<string>("");

    React.useEffect(() => {
        setValue(value);
    }, [value]);

    const handleOnKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleOnEnter(event);
        }
    }

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
        return onChange && onChange(event.currentTarget.value);
    }

    const handleOnEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        return onEnter && onEnter(event.currentTarget.value);
    }
    return <input
        type="text"
        className={cls("input")}
        value={localValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleChange}
        onKeyPress={handleOnKeyPress}
    />
};

export default Input;

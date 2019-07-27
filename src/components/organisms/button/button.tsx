import cls from 'classnames';
import * as React from 'react';

import './button.scss';

interface IButton {
    className?: string,
    title: string,
    color?: 'green' | 'red'
}

const Button: React.FC<IButton> = ({ title, className, color = 'green' }) => {
    return (
        <button className={cls(className, 'btn', `btn--${color}`)}>{title}</button>
    )
}

export default Button;

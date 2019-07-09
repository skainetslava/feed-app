import * as React from 'react';

import { Input } from 'src/components/input';
import { ITodo } from 'src/reducers/todo';
import { ListTodo } from '../list-todo';


import './todo.scss';


interface ITodoComponentProps {
    list: ITodo[]
    value: string,
    handleOnChangeInput: (cb:object) => void
    handleOnAddItem: () => void
}

export const TodoComponent: React.SFC<ITodoComponentProps> = ({value, handleOnChangeInput,  handleOnAddItem, ...props}) => {
    return (
        <div className="todo">
            <h1>todos</h1>
            <Input 
                value={value} 
                onChange={handleOnChangeInput}
                onEnter={handleOnAddItem}
            />
            <ListTodo {...props} />
        </div>
    )
}

export default TodoComponent;
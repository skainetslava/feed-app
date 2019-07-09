import * as React from 'react';

import { ITodo } from 'src/reducers/todo';
import { ItemTodo } from '../item-todo';

import './list-todo.scss';

interface IListTodoProps {
    list: ITodo[]
}

export const ListTodo: React.SFC<IListTodoProps> = ({ list }) => {
    return (
        <section className="todo__list">
            {
                list && list.length > 0 && list.map((item: ITodo) => {
                    return <ItemTodo key={item.id} id={item.id} label={item.label} />
                })
            }
        </section>
    );
};

export default ListTodo;
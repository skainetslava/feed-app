
import { createSelector } from 'reselect';

import { IStore } from 'src/store';

const TODOS = (state: IStore) => state.todo.todos;

export const getTodos = createSelector(
    [TODOS],
    (todos) => todos && todos
)

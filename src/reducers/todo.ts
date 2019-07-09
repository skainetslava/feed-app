import { ITodoAction } from '../actions/index';

export interface ITodo {
    id: number;
    label: string;
}

export interface ITodoStoreState {
    todos: ITodo[]
}

const initialState: ITodoStoreState = {
    todos: [
        {
            id: 1,
            label: "One action"
        },
        {
            id: 2,
            label: "Two action"
        }
    ]
}


export default function todoReducer(state: ITodoStoreState = initialState, action: ITodoAction): ITodoStoreState {
    switch (action.type) {
        case "ADD_ITEM":
            const newItem: ITodo = {
                id: state.todos.length, 
                label: action.payload.value 
            }
            return {
                ...state,
                todos: [
                    ...state.todos, 
                    newItem
                ]
            }
        default:
            return state;
    }
}
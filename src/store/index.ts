
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index';

import { ITodoStoreState } from '../reducers/todo';


export interface IStore {
    todo: ITodoStoreState
}

const configureStore = (initialState?: IStore) => {
    const logger = createLogger();
    const middlewares = [
        logger,
        thunk
    ];
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    console.log(initialState);

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(...middlewares),
           // (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : (fn: any) => fn
        )
    )

    return store;
};

export default configureStore;
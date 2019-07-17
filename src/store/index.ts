
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'src/sagas';
import rootReducer from '../reducers/index';

export interface IStore {
    chart: {
        tracks: object[],
    };
}

const configureStore = (initialState?: IStore) => {
    const logger = createLogger();
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [
        logger,
        sagaMiddleware,

    ];
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    console.log(initialState);

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(...middlewares),
        ),
    );

    // store.runSaga = sagaMiddleware.run;
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;

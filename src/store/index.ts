
import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { IAlbumStoreState } from "src/reducers/album";
import { IChartStoreState } from "src/reducers/chart"

import { IArtistStoreState } from "src/reducers/artist";
import { ISearchStoreState } from "src/reducers/search";
import rootSaga from "src/sagas";
import rootReducer from "../reducers/index";

export interface IStore {
    album: IAlbumStoreState;
    chart: IChartStoreState;
    artist: IArtistStoreState;
    search: ISearchStoreState;
}

const configureStore = (initialState?: IStore) => {
    const logger = createLogger();
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [
        logger,
        sagaMiddleware,

    ];
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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


import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { IAlbumStoreState } from "src/reducers/album";
import { IArtistStoreState } from "src/reducers/artist";
import { IChartStoreState } from "src/reducers/chart"
import { IPlayerStoreState } from "src/reducers/player";
import { IPlaylistStoreState } from "src/reducers/playlist";
import { ISearchStoreState } from "src/reducers/search";


import rootSaga from "src/sagas";
import rootReducer from "../reducers/index";

export interface IStore {
    album: IAlbumStoreState;
    chart: IChartStoreState;
    artist: IArtistStoreState;
    search: ISearchStoreState;
    player: IPlayerStoreState;
    playlist: IPlaylistStoreState
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

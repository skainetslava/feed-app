
import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { IAlbumStoreState } from "src/reducers/album/album";
import { IArtistStoreState } from "src/reducers/artist/artist";
import { IChartStoreState } from "src/reducers/chart/chart"
import { IPlayerStoreState } from "src/reducers/player/player";
import { IPlaylistStoreState } from "src/reducers/playlist/playlist";
import { ISearchStoreState } from "src/reducers/search/search";


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
        sagaMiddleware,
    ];

    let composeEnhancers = compose;

    if (process.env.NODE_ENV !== "production") {
        composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        middlewares.push(logger as any);
    }

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(...middlewares),
        ),
    );

    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;

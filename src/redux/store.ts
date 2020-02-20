
import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { albumReducer } from "src/redux/album";

import { artistReducer } from "src/redux/artist";
import { chartReducer } from "src/redux/chart"
import { playerReducer } from "src/redux/player";
import { playlistReducer } from "src/redux/playlist";
import { searchReducer } from "src/redux/search";


import rootReducer from "./reducers";
import rootSaga from "./sagas";

export interface IStore {
    album: albumReducer.IAlbumStoreState;
    chart: chartReducer.IChartStoreState;
    artist: artistReducer.IArtistStoreState;
    search: searchReducer.ISearchStoreState;
    player: playerReducer.IPlayerStoreState;
    playlist: playlistReducer.IPlaylistStoreState
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

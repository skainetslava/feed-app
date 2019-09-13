import { combineReducers } from "redux";
import albumReducer from "./album/album";
import artistReducer from "./artist/artist";
import chartReducer from "./chart/chart";
import playerReducer from "./player/player";
import playlistReducer from "./playlist/playlist";
import searchReducer from "./search/search";

export default combineReducers({
    artist: artistReducer,
    album: albumReducer,
    chart: chartReducer,
    search: searchReducer,
    player: playerReducer,
    playlist: playlistReducer,
});


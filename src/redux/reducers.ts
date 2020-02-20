import { combineReducers } from "redux";
import { albumReducer } from "src/redux/album";
import { artistReducer } from "src/redux/artist";
import { chartReducer } from "src/redux/chart";
import { playerReducer } from "src/redux/player";
import { playlistReducer } from "src/redux/playlist";
import { searchReducer } from "src/redux/search";

export default combineReducers({
    artist: artistReducer.reducer,
    album: albumReducer.reducer,
    chart: chartReducer.reducer,
    search: searchReducer.reducer,
    player: playerReducer.reducer,
    playlist: playlistReducer.reducer,
});


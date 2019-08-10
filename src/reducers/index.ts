import { combineReducers } from "redux";
import albumReducer from "./album";
import artistReducer from "./artist";
import chartReducer from "./chart";
import searchReducer from "./search";

export default combineReducers({
    artist: artistReducer,
    album: albumReducer,
    chart: chartReducer,
    search: searchReducer,
});


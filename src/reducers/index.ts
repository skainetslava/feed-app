import { combineReducers } from "redux";
import albumReducer from "./album";
import chartReducer from "./chart";

export default combineReducers({
    album: albumReducer,
    chart: chartReducer,
});


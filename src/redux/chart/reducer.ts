import { IAlbum, IPlaylist, ITrack } from "src/models";
import { IChartAction } from "./actions";
import { FETCH_CHART_FAILURE, FETCH_CHART_REQUEST, FETCH_CHART_SUCCESS } from "./types";

export interface IChartStoreState {
  tracks: ITrack[];
  albums: IAlbum[];
  playlists: IPlaylist[];
  isLoading: boolean;
}

const initialState: IChartStoreState = {
  tracks: [],
  albums: [],
  playlists: [],
  isLoading: false,
};

export function reducer(
  state: IChartStoreState = initialState,
  action: IChartAction
): IChartStoreState {
  switch (action.type) {
    case FETCH_CHART_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CHART_SUCCESS:
      const { tracks, albums, playlists } = action.payload;
      return {
        ...state,
        isLoading: false,
        tracks: [...tracks],
        albums: [...albums],
        playlists: [...playlists],
      };
    case FETCH_CHART_FAILURE:
      return {
        ...state,
        isLoading: false,
        tracks: [...state.tracks],
      };
    default:
      return state;
  }
}

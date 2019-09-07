import { IPlaylist } from "src/models";
import { IPlaylistDataAction } from "../actions/playlist";
import * as constants from "../constants/actions/playlist";

export interface IPlaylistStoreState {
  data: IPlaylist | null;
  isLoading: boolean;
}

const initialState: IPlaylistStoreState = {
  data: null,
  isLoading: false,
};

export default function playlistReducer(
  state: IPlaylistStoreState = initialState,
  action: IPlaylistDataAction,
): IPlaylistStoreState {
  switch (action.type) {
    case constants.FETCH_DATA_PLAYLIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        data: null,
      };
    case constants.FETCH_DATA_PLAYLIST_SUCCESS:
      const playlist = action.payload;
      return {
        ...state,
        isLoading: false,
        data: playlist,
      };
    case constants.FETCH_DATA_PLAYLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: null,
      };
    default:
      return state;
  }
}

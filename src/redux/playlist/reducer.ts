import { IPlaylist } from "src/models";
import { IPlaylistDataAction } from "./actions";
import { FETCH_DATA_PLAYLIST_FAILURE, FETCH_DATA_PLAYLIST_REQUEST, FETCH_DATA_PLAYLIST_SUCCESS } from "./types";

export interface IPlaylistStoreState {
    data: IPlaylist | null;
    isLoading: boolean;
  }

const initialState: IPlaylistStoreState = {
    data: null,
    isLoading: false,
  };

export function reducer(
    state: IPlaylistStoreState = initialState,
    action: IPlaylistDataAction,
  ): IPlaylistStoreState {
    switch (action.type) {
      case FETCH_DATA_PLAYLIST_REQUEST:
        return {
          ...state,
          isLoading: true,
          data: null,
        };
      case FETCH_DATA_PLAYLIST_SUCCESS:
        const playlist = action.payload;
        return {
          ...state,
          isLoading: false,
          data: playlist,
        };
      case FETCH_DATA_PLAYLIST_FAILURE:
        return {
          ...state,
          isLoading: false,
          data: null,
        };
      default:
        return state;
    }
  }

import { IAlbum } from "src/models";
import { IAlbumDataAction } from "./actions";
import {
  FETCH_DATA_ALBUM_FAILURE,
  FETCH_DATA_ALBUM_REQUEST,
  FETCH_DATA_ALBUM_SUCCESS,
} from "./types";

export interface IAlbumStoreState {
  data: IAlbum | null;
  isLoading: boolean;
}

const initialState: IAlbumStoreState = {
  data: null,
  isLoading: false,
};

export function reducer(
  state: IAlbumStoreState = initialState,
  action: IAlbumDataAction
): IAlbumStoreState {
  switch (action.type) {
    case FETCH_DATA_ALBUM_REQUEST:
      return {
        ...state,
        isLoading: true,
        data: null,
      };
    case FETCH_DATA_ALBUM_SUCCESS:
      const album = action.payload;
      return {
        ...state,
        isLoading: false,
        data: album,
      };
    case FETCH_DATA_ALBUM_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: null,
      };
    default:
      return state;
  }
}

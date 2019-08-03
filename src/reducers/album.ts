import { IAlbum } from "src/models";
import { IAlbumDataAction } from "../actions/album";
import * as constants from "../constants/actions/album";

export interface IAlbumStoreState {
  data: IAlbum | null;
  isLoading: boolean;
}

const initialState: IAlbumStoreState = {
  data: null,
  isLoading: false,
};

export default function albumReducer(
  state: IAlbumStoreState = initialState,
  action: IAlbumDataAction,
): IAlbumStoreState {
  switch (action.type) {
    case constants.FETCH_DATA_ALBUM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case constants.FETCH_DATA_ALBUM_SUCCESS:
      const album = action.payload;
      return {
        ...state,
        isLoading: false,
        data: album,
      };
    case constants.FETCH_DATA_ALBUM_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: null,
      };
    default:
      return state;
  }
}

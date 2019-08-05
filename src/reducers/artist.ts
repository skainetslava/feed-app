import { IArtist } from "src/models";
import { IArtistDataAction } from "../actions/artist";
import * as constants from "../constants/actions/artist";

export interface IArtistStoreState {
  data: IArtist | null;
  isLoading: boolean;
}

const initialState: IArtistStoreState = {
  data: null,
  isLoading: false,
};

export default function artistReducer(
  state: IArtistStoreState = initialState,
  action: IArtistDataAction,
): IArtistStoreState {
  switch (action.type) {
    case constants.FETCH_DATA_ARTIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case constants.FETCH_DATA_ARTIST_SUCCESS:
      const artist = action.payload;
      return {
        ...state,
        isLoading: false,
        data: artist,
      };
    case constants.FETCH_DATA_ARTIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: null,
      };
    default:
      return state;
  }
}

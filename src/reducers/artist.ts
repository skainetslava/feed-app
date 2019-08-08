import { IAlbum, IArtist, ITrack } from "src/models";
import { IArtistDataAction } from "../actions/artist";
import * as constants from "../constants/actions/artist";

export interface IArtistStoreState {
  data: IArtist | null;
  tracks: ITrack[],
  albums: IAlbum[],
  error: string | null,
  isLoading: boolean;
}

const initialState: IArtistStoreState = {
  data: null,
  error: null,
  tracks: [],
  albums: [],
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
    case constants.FETCH_ARTIST_TRACKS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case constants.FETCH_ARTIST_TRACKS_SUCCESS:
      const tracks = action.payload;
      return {
        ...state,
        isLoading: false,
        tracks,
      };
    case constants.FETCH_ARTIST_TRACKS_FAILURE:
      return {
        ...state,
        error:  action.payload.message,
        isLoading: false,
        tracks: [],
      };

    case constants.FETCH_ARTIST_ALBUMS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case constants.FETCH_ARTIST_ALBUMS_SUCCESS:
      const albums = action.payload;
      return {
        ...state,
        isLoading: false,
        albums,
      };
    case constants.FETCH_ARTIST_ALBUMS_FAILURE:
      return {
        ...state,
        error: action.payload.message,
        isLoading: false,
        albums: [],
      };
    default:
      return state;
  }
}

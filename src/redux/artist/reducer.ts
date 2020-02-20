import { IAlbum, IArtist, ITrack } from "src/models";
import { IArtistDataAction } from "./actions";
import {
    FETCH_ARTIST_ALBUMS_FAILURE,
    FETCH_ARTIST_ALBUMS_REQUEST,
    FETCH_ARTIST_ALBUMS_SUCCESS,
    FETCH_ARTIST_TRACKS_FAILURE,
    FETCH_ARTIST_TRACKS_REQUEST,
    FETCH_ARTIST_TRACKS_SUCCESS,
    FETCH_DATA_ARTIST_FAILURE,
    FETCH_DATA_ARTIST_REQUEST,
    FETCH_DATA_ARTIST_SUCCESS,
} from "./types";

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


export function reducer(
    state: IArtistStoreState = initialState,
    action: IArtistDataAction,
  ): IArtistStoreState {
    switch (action.type) {
      case FETCH_DATA_ARTIST_REQUEST:
        return {
          ...state,
          isLoading: true,
          data: null,
          tracks: [],
          albums: [],
        };
      case FETCH_DATA_ARTIST_SUCCESS:
        const artist = action.payload;
        return {
          ...state,
          isLoading: false,
          data: artist,
        };
      case FETCH_DATA_ARTIST_FAILURE:
        return {
          ...state,
          isLoading: false,
          data: null,
        };
      case FETCH_ARTIST_TRACKS_REQUEST:
        return {
          ...state,
          isLoading: true,
          tracks: [],
        };
      case FETCH_ARTIST_TRACKS_SUCCESS:
        const tracks = action.payload;
        return {
          ...state,
          isLoading: false,
          tracks,
        };
      case FETCH_ARTIST_TRACKS_FAILURE:
        return {
          ...state,
          error: action.payload.message,
          isLoading: false,
          tracks: [],
        };

      case FETCH_ARTIST_ALBUMS_REQUEST:
        return {
          ...state,
          isLoading: true,
          albums: [],
        };
      case FETCH_ARTIST_ALBUMS_SUCCESS:
        const albums = action.payload;
        return {
          ...state,
          isLoading: false,
          albums,
        };
      case FETCH_ARTIST_ALBUMS_FAILURE:
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

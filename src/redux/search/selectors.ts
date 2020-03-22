import { createSelector } from "reselect";
import { IStore } from "../store";

const SEARCH_TRACKS = (state: IStore) => state.search.tracks;

export const getSearchTracks = createSelector(
  [SEARCH_TRACKS],
  tracks => tracks
);

const SEARCH_ARTISTS = (state: IStore) => state.search.artists;

export const getSearchArtists = createSelector(
  [SEARCH_ARTISTS],
  artists => artists
);

const SEARCHING_VALUE = (state: IStore) => state.search.searchingValue;

export const getSearchingValue = createSelector(
  [SEARCHING_VALUE],
  value => value
);

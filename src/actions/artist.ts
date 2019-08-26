import { IArtist, ITrack } from "src/models";
import { IArtistData } from "src/services/artist/artistAPI";
import { IArtistTracksData } from "src/services/artist/tracks";
import * as constants from "../constants/actions/artist";

export interface IFetchArtistDataRequest {
    type: constants.FETCH_DATA_ARTIST_REQUEST;
}

export interface IFetchArtistDataSuccess {
    type: constants.FETCH_DATA_ARTIST_SUCCESS;
}

export interface IFetchArtistDataFailure {
    type: constants.FETCH_DATA_ARTIST_FAILURE;
}

export type ArtistDataActionType =
    constants.FETCH_DATA_ARTIST_FAILURE |
    constants.FETCH_DATA_ARTIST_REQUEST |
    constants.FETCH_DATA_ARTIST_SUCCESS |
    constants.FETCH_ARTIST_TRACKS_FAILURE |
    constants.FETCH_ARTIST_TRACKS_REQUEST |
    constants.FETCH_ARTIST_TRACKS_SUCCESS |
    constants.FETCH_ARTIST_ALBUMS_FAILURE |
    constants.FETCH_ARTIST_ALBUMS_REQUEST |
    constants.FETCH_ARTIST_ALBUMS_SUCCESS |
    constants.PLAY_PAGE;

export interface IArtistDataAction {
    type: ArtistDataActionType;
    payload?: any;
}

export function fetchArtistData(id: string): IArtistDataAction {
    return {
        type: constants.FETCH_DATA_ARTIST_REQUEST,
        payload: id,
    };
}

export function fetchArtistDataSuccess(data: IArtistData): IArtistDataAction {
    return {
        type: constants.FETCH_DATA_ARTIST_SUCCESS,
        payload: data,
    };
}

export function fetchArtistDataFailure(value: string): IArtistDataAction {
    return {
        type: constants.FETCH_DATA_ARTIST_FAILURE,
        payload: { value },
    };
}

export interface IFetchArtistTracksRequest {
    type: constants.FETCH_ARTIST_TRACKS_REQUEST;
    payload: string;
}

export interface IFetchArtistTracksSuccess {
    type: constants.FETCH_ARTIST_TRACKS_SUCCESS;
    payload: IArtistTracksData;
}

export interface IFetchArtistTracksFailure {
    type: constants.FETCH_ARTIST_TRACKS_FAILURE;
    payload: IArtistTracksData;
}

export interface IPlayPage {
    type: constants.PLAY_PAGE;
    payload: ITrack[];
}

export function playPage(tracks: ITrack[]): IPlayPage {
    return {
        type: constants.PLAY_PAGE,
        payload: tracks,
    };
}

export function fetchArtistTracks(id: string): IFetchArtistTracksRequest {
    return {
        type: constants.FETCH_ARTIST_TRACKS_REQUEST,
        payload: id,
    };
}

export function fetchArtistTracksSuccess(data: IArtistTracksData): IFetchArtistTracksSuccess {
    return {
        type: constants.FETCH_ARTIST_TRACKS_SUCCESS,
        payload: data,
    };
}

export function fetchArtistTracksFailure(data: IArtistTracksData): IFetchArtistTracksFailure {
    return {
        type: constants.FETCH_ARTIST_TRACKS_FAILURE,
        payload: data,
    };
}



export interface IFetchArtistAlbumsRequest {
    type: constants.FETCH_ARTIST_ALBUMS_REQUEST;
    payload: string;
}

export interface IFetchArtistAlbumsSuccess {
    type: constants.FETCH_ARTIST_ALBUMS_SUCCESS;
    payload: IArtist;
}

export interface IFetchArtistAlbumsFailure {
    type: constants.FETCH_ARTIST_ALBUMS_FAILURE;
    payload: string;
}


export function fetchArtistAlbums(id: string): IFetchArtistAlbumsRequest {
    return {
        type: constants.FETCH_ARTIST_ALBUMS_REQUEST,
        payload: id,
    };
}

export function fetchArtistAlbumsSuccess(data: IArtist): IFetchArtistAlbumsSuccess {
    return {
        type: constants.FETCH_ARTIST_ALBUMS_SUCCESS,
        payload: data,
    };
}

export function fetchArtistAlbumsFailure(message: string): IFetchArtistAlbumsFailure {
    return {
        type: constants.FETCH_ARTIST_ALBUMS_FAILURE,
        payload: message,
    };
}
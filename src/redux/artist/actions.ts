import { IArtist, ITrack } from "src/models";
import { IArtistData } from "src/services/artist/artistAPI";
import { IArtistTracksData } from "src/services/artist/tracks";
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
    PLAY_PAGE ,
} from "./types";

export interface IFetchArtistDataRequest {
    type: FETCH_DATA_ARTIST_REQUEST;
}

export interface IFetchArtistDataSuccess {
    type: FETCH_DATA_ARTIST_SUCCESS;
}

export interface IFetchArtistDataFailure {
    type: FETCH_DATA_ARTIST_FAILURE;
}

export type ArtistDataActionType =
    FETCH_DATA_ARTIST_FAILURE |
    FETCH_DATA_ARTIST_REQUEST |
    FETCH_DATA_ARTIST_SUCCESS |
    FETCH_ARTIST_TRACKS_FAILURE |
    FETCH_ARTIST_TRACKS_REQUEST |
    FETCH_ARTIST_TRACKS_SUCCESS |
    FETCH_ARTIST_ALBUMS_FAILURE |
    FETCH_ARTIST_ALBUMS_REQUEST |
    FETCH_ARTIST_ALBUMS_SUCCESS |
    PLAY_PAGE;

export interface IArtistDataAction {
    type: ArtistDataActionType;
    payload?: any;
}

export function fetchArtistData(id: string): IArtistDataAction {
    return {
        type: FETCH_DATA_ARTIST_REQUEST,
        payload: id,
    };
}

export function fetchArtistDataSuccess(data: IArtistData): IArtistDataAction {
    return {
        type: FETCH_DATA_ARTIST_SUCCESS,
        payload: data,
    };
}

export function fetchArtistDataFailure(value: string): IArtistDataAction {
    return {
        type: FETCH_DATA_ARTIST_FAILURE,
        payload: { value },
    };
}

export interface IFetchArtistTracksRequest {
    type: FETCH_ARTIST_TRACKS_REQUEST;
    payload: string;
}

export interface IFetchArtistTracksSuccess {
    type: FETCH_ARTIST_TRACKS_SUCCESS;
    payload: IArtistTracksData;
}

export interface IFetchArtistTracksFailure {
    type: FETCH_ARTIST_TRACKS_FAILURE;
    payload: IArtistTracksData;
}

export interface IPlayPage {
    type: PLAY_PAGE;
    payload: ITrack[];
}

export function playPage(tracks: ITrack[]): IPlayPage {
    return {
        type: PLAY_PAGE,
        payload: tracks,
    };
}

export function fetchArtistTracks(id: string): IFetchArtistTracksRequest {
    return {
        type: FETCH_ARTIST_TRACKS_REQUEST,
        payload: id,
    };
}

export function fetchArtistTracksSuccess(data: IArtistTracksData): IFetchArtistTracksSuccess {
    return {
        type: FETCH_ARTIST_TRACKS_SUCCESS,
        payload: data,
    };
}

export function fetchArtistTracksFailure(data: IArtistTracksData): IFetchArtistTracksFailure {
    return {
        type: FETCH_ARTIST_TRACKS_FAILURE,
        payload: data,
    };
}

export interface IFetchArtistAlbumsRequest {
    type: FETCH_ARTIST_ALBUMS_REQUEST;
    payload: string;
}

export interface IFetchArtistAlbumsSuccess {
    type: FETCH_ARTIST_ALBUMS_SUCCESS;
    payload: IArtist;
}

export interface IFetchArtistAlbumsFailure {
    type: FETCH_ARTIST_ALBUMS_FAILURE;
    payload: string;
}

export function fetchArtistAlbums(id: string): IFetchArtistAlbumsRequest {
    return {
        type: FETCH_ARTIST_ALBUMS_REQUEST,
        payload: id,
    };
}

export function fetchArtistAlbumsSuccess(data: IArtist): IFetchArtistAlbumsSuccess {
    return {
        type: FETCH_ARTIST_ALBUMS_SUCCESS,
        payload: data,
    };
}

export function fetchArtistAlbumsFailure(message: string): IFetchArtistAlbumsFailure {
    return {
        type: FETCH_ARTIST_ALBUMS_FAILURE,
        payload: message,
    };
}

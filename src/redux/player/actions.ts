import { ITrack } from "src/models";
import {
    CHANGE_VOLUME,
    CONTINUE_AUDIO,
    NEXT_AUDIO,
    NEXT_AUDIO_REQUEST,
    PAUSE_AUDIO,
    PLAY_AUDIO,
    PREV_AUDIO,
    PREV_AUDIO_REQUEST,
    REPEAT_AUDIO,
    SAVE_AUDIO,
    SHUFFLE_PLAYLIST,
    UPDATE_DURATION,
    UPDATE_PLAYLIST,
 } from "./types";

export interface IUpdateDurationAction {
    type: UPDATE_DURATION;
    payload: number
}

export interface IChangeVolumeAction {
    type: CHANGE_VOLUME;
    payload: number
}

export interface IContinueAudioAction {
    type: CONTINUE_AUDIO;
}

export interface IPlayAudioAction {
    type: PLAY_AUDIO;
    payload?: ITrack
}

export interface ISaveAudioAction {
    type: SAVE_AUDIO;
    payload?: ITrack
}

export interface IPauseAudioAction {
    type: PAUSE_AUDIO;
}

export interface INextAudioAction {
    type: NEXT_AUDIO;
    payload: ITrack
}
export interface IPrevAudioAction {
    type: PREV_AUDIO;
    payload: ITrack
}

export interface IPrepareNextAudioAction {
    type: NEXT_AUDIO_REQUEST;
}
export interface IPreparePrevAudioAction {
    type: PREV_AUDIO_REQUEST;
}

export interface IShufflePlaylist {
    type: SHUFFLE_PLAYLIST;
}

export interface IRepeatAudio {
    type: REPEAT_AUDIO;
}


export interface IUpdatePlaylistAction {
    type: UPDATE_PLAYLIST;
    payload: ITrack[]
}

export type PlayerActionType =
    PLAY_AUDIO
    | SAVE_AUDIO
    | UPDATE_DURATION
    | CONTINUE_AUDIO
    | PAUSE_AUDIO
    | NEXT_AUDIO
    | PREV_AUDIO
    | CHANGE_VOLUME
    | UPDATE_PLAYLIST
    | REPEAT_AUDIO
    | SHUFFLE_PLAYLIST;

export function shufflePlaylist(): IShufflePlaylist {
    return {
        type: SHUFFLE_PLAYLIST,
    }
}

export function repeatAudio(): IRepeatAudio {
    return {
        type: REPEAT_AUDIO,
    }
}

export function updatePlaylist(payload: ITrack[]): IUpdatePlaylistAction {
    return {
        type: UPDATE_PLAYLIST,
        payload,
    }
}

export function changeVolume(payload: number): IChangeVolumeAction {
    return {
        type: CHANGE_VOLUME,
        payload,
    }
}

export function updateDuration(payload: number): IUpdateDurationAction {
    return {
        type: UPDATE_DURATION,
        payload,
    }
}

export function continueAudio(): IContinueAudioAction {
    return {
        type: CONTINUE_AUDIO,
    }
}

export function playAudio(payload?: ITrack): IPlayAudioAction {
    return {
        type: PLAY_AUDIO,
        payload,
    }
}

export function saveAudioToStore(payload?: ITrack): ISaveAudioAction {
    return {
        type: SAVE_AUDIO,
        payload,
    }
}

export function pauseAudio(): IPauseAudioAction {
    return {
        type: PAUSE_AUDIO,
    }
}

export function preparePrevAudio(): IPreparePrevAudioAction {
    return {
        type: PREV_AUDIO_REQUEST,
    }
}
export function prepareNextAudio(): IPrepareNextAudioAction {
    return {
        type: NEXT_AUDIO_REQUEST,
    }
}

export function goToNextTrack(payload: ITrack): INextAudioAction {
    return {
        type: NEXT_AUDIO,
        payload,
    }
}
export function goToPrevTrack(payload: ITrack): IPrevAudioAction {
    return {
        type: PREV_AUDIO,
        payload,
    }
}
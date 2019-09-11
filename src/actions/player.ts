import { ITrack } from "src/models";
import * as constants from "../constants/actions/player";

export interface IUpdateDurationAction {
    type: constants.UPDATE_DURATION;
    payload: number
}

export interface IChangeVolumeAction {
    type: constants.CHANGE_VOLUME;
    payload: number
}

export interface IContinueAudioAction {
    type: constants.CONTINUE_AUDIO;
}

export interface IPlayAudioAction {
    type: constants.PLAY_AUDIO;
    payload?: ITrack
}

export interface ISaveAudioAction {
    type: constants.SAVE_AUDIO;
    payload?: ITrack
}

export interface IPauseAudioAction {
    type: constants.PAUSE_AUDIO;
}

export interface INextAudioAction {
    type: constants.NEXT_AUDIO;
    payload: ITrack
}
export interface IPrevAudioAction {
    type: constants.PREV_AUDIO;
    payload: ITrack
}

export interface IPrepareNextAudioAction {
    type: constants.NEXT_AUDIO_REQUEST;
}
export interface IPreparePrevAudioAction {
    type: constants.PREV_AUDIO_REQUEST;
}

export interface IShufflePlaylist {
    type: constants.SHUFFLE_PLAYLIST;
}

export interface IRepeatAudio {
    type: constants.REPEAT_AUDIO;
}


export interface IUpdatePlaylistAction {
    type: constants.UPDATE_PLAYLIST;
    payload: ITrack[]
}

export type PlayerActionType =
    constants.PLAY_AUDIO
    | constants.SAVE_AUDIO
    | constants.UPDATE_DURATION
    | constants.CONTINUE_AUDIO
    | constants.PAUSE_AUDIO
    | constants.NEXT_AUDIO
    | constants.PREV_AUDIO
    | constants.CHANGE_VOLUME
    | constants.UPDATE_PLAYLIST
    | constants.REPEAT_AUDIO
    | constants.SHUFFLE_PLAYLIST;

export function shufflePlaylist(): IShufflePlaylist {
    return {
        type: constants.SHUFFLE_PLAYLIST,
    }
}

export function repeatAudio(): IRepeatAudio {
    return {
        type: constants.REPEAT_AUDIO,
    }
}

export function updatePlaylist(payload: ITrack[]): IUpdatePlaylistAction {
    return {
        type: constants.UPDATE_PLAYLIST,
        payload,
    }
}

export function changeVolume(payload: number): IChangeVolumeAction {
    return {
        type: constants.CHANGE_VOLUME,
        payload,
    }
}

export function updateDuration(payload: number): IUpdateDurationAction {
    return {
        type: constants.UPDATE_DURATION,
        payload,
    }
}

export function continueAudio(): IContinueAudioAction {
    return {
        type: constants.CONTINUE_AUDIO,
    }
}

export function playAudio(payload?: ITrack): IPlayAudioAction {
    return {
        type: constants.PLAY_AUDIO,
        payload,
    }
}

export function saveAudioToStore(payload?: ITrack): ISaveAudioAction {
    return {
        type: constants.SAVE_AUDIO,
        payload,
    }
}

export function pauseAudio(): IPauseAudioAction {
    return {
        type: constants.PAUSE_AUDIO,
    }
}

export function preparePrevAudio(): IPreparePrevAudioAction {
    return {
        type: constants.PREV_AUDIO_REQUEST,
    }
}
export function prepareNextAudio(): IPrepareNextAudioAction {
    return {
        type: constants.NEXT_AUDIO_REQUEST,
    }
}

export function goToNextTrack(payload: ITrack): INextAudioAction {
    return {
        type: constants.NEXT_AUDIO,
        payload,
    }
}
export function goToPrevTrack(payload: ITrack): IPrevAudioAction {
    return {
        type: constants.PREV_AUDIO,
        payload,
    }
}
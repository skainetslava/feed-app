import { ITrack } from "src/models";
import * as constants from "../constants/actions/player";

export interface IUpdateDurationAction {
    type: constants.UPDATE_DURATION;
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

export type PlayerActionType =
    constants.PLAY_AUDIO
    | constants.SAVE_AUDIO
    | constants.UPDATE_DURATION
    | constants.CONTINUE_AUDIO
    | constants.PAUSE_AUDIO
    | constants.NEXT_AUDIO
    | constants.PREV_AUDIO;

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
    console.log("object");
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

export function goToPrevAudio(payload: ITrack): IPrevAudioAction {
    return {
        type: constants.PREV_AUDIO,
        payload,
    }
}
export function goToNextAudio(payload: ITrack): INextAudioAction {
    return {
        type: constants.NEXT_AUDIO,
        payload,
    }
}
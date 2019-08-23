import { PlayerActionType } from "src/actions/player";
import { getItemFromLocalStorage } from "src/helpers/getItemFromLocalStorage";
import { ITrack } from "src/models";
import * as constants from "../constants/actions/player";

const track: ITrack = {
    id: 1,
    artistId: 1,
    artist: "Twenty one pilots",
    title: "Stressed out",
    preview: "https://cdns-preview-0.dzcdn.net/stream/c-00f5ada432d79bcedcc9d4e4c6856888-3.mp3",
    coverSmallTrack: "https://cdns-images.dzcdn.net/images/cover/9232336ac18a40019e543f9d6a270039/500x500-000000-80-0-0.jpg",
    duration: 164,
}

export interface IPlayerStoreState {
    playlist: ITrack[];
    source: ITrack | null;
    timing: number;
    isLoading: boolean;
    isPlaying: boolean;
}

const initialState: IPlayerStoreState = {
    playlist: [],
    source: getItemFromLocalStorage<ITrack>("audio"),
    timing: getItemFromLocalStorage<number>("timingAudio") || 0,
    isLoading: false,
    isPlaying: false,
};

interface IPlayerAction {
    type: PlayerActionType;
    payload: ITrack & number;
}


export default function playerReducer(
    state: IPlayerStoreState = initialState, action: IPlayerAction): IPlayerStoreState {
    switch (action.type) {
        case constants.CONTINUE_AUDIO:
            return {
                ...state,
                isPlaying: true,
            }

        case constants.SAVE_AUDIO:
            const audio = action.payload;
            return {
                ...state,
                isPlaying: true,
                source: audio,
                timing: 0,
            };

        case constants.PAUSE_AUDIO:
            return {
                ...state,
                isPlaying: false,
            }
        case constants.UPDATE_DURATION:
            return {
                ...state,
                timing: action.payload,
            }
        case constants.NEXT_AUDIO:
            return {
                ...state,
            };
        case constants.PREV_AUDIO:
            return {
                ...state,
            };
        default:
            return state;
    }
}

import * as constants from "src/constants/actions/search";

export function saveSearchingValue(value: string) {
    return {
        type: constants.SAVE_SEARCHING_VALUE,
        payload: value,
    };
}
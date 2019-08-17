import * as constants from "src/constants/actions/search";

export interface IRedirectProps {
    tabName: string;
    value: string;
}

export function saveSearchingValue(value: string) {
    return {
        type: constants.SAVE_SEARCHING_VALUE,
        payload: value,
    };
}

export function redirectBySearchingValue(data: IRedirectProps) {
    return {
        type: constants.REDIRECT_BY_SEARCHING_VALUE,
        payload: data,
    };
}
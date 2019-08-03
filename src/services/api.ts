import axios from "axios";
import {
    API_ROOT,
    // PUBLIC_KEY
} from "src/constants/server/config";

interface IData {
    url: string;
    params?: object;
    headers?: object;
    data?: object;
}

export function getData({ url, params, headers }: IData) {
    return axios({
        headers: {
            ...headers,
        },
        method: "get",
        params: {
            ...params,
        },
        responseType: "json",
        timeout: 10000,
        url: `${API_ROOT}${url}`,
    });
}

export function postData({ url, headers, data }: IData) {
    return axios({
        data: { ...data },
        headers: {
            // 'Authorization': `Client-ID ${PUBLIC_KEY}`,
            ...headers,
        },
        method: "post",
        responseType: "json",
        timeout: 10000,
        url: `${API_ROOT}${url}`,
    });
}

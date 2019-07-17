import axios from 'axios';
import {
    API_ROOT,
    // PUBLIC_KEY
} from 'src/constants/server/config';

interface IData {
    url: string;
    params?: object;
    headers?: object;
    data?: object;
}

export function getData({ url, params, headers}: IData) {
    return axios({
            headers: {
               // 'Authorization': `Client-ID ${PUBLIC_KEY}`,
               ///'appId': 360644,
                ...headers,
            },
            method: 'get',
            params: {
                ...params,
                output: 'jsonp',
                appId: 360644,
            },
            responseType: 'json',
            timeout: 10000,
            url: `${API_ROOT}${url}`,
        });
}

export function postData({ url, headers, data}: IData) {
    return axios({
            url: `${API_ROOT}${url}`,
            timeout: 10000,
            method: 'post',
            headers: {
               // 'Authorization': `Client-ID ${PUBLIC_KEY}`,
                ...headers,
            },
            responseType: 'json',
            data: { ...data },
        });
}

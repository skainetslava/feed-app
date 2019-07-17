// import { normalizeData } from 'src/schemas';
// import { allPhotosSchema } from 'src/schemas/feed';

import { getData } from './api';

export interface IChartData {
    response?: Array<{
        id: number,
        label: string,
    }>;
    error?: object;
}

export const fetchChartApi = () => {
    const promise = getData({ url: `/chart` })
        .then((response) => {
            const { data } = response;
            // const normalizedPhotos = normalizeData(data, allPhotosSchema);
            console.log(data);
            return {
                response,
            };
        })
        .catch((error) => { error });

    return promise;
};

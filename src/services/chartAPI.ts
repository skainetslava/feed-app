// import { normalizeData } from 'src/schemas';
// import { allPhotosSchema } from 'src/schemas/feed';
import { ITrack } from 'src/models/track'
import { getData } from './api';


export interface IChartData {
    response?: ITrack[];
    error?: object;
}

export const fetchChartApi = (): Promise<IChartData | void> => {
    const promise = getData({ url: `/chart` })
        .then((response) => {
            const { data } = response;
            // const normalizedPhotos = normalizeData(data, allPhotosSchema);
            const tracks = data.tracks.data.map((item: ITrack): ITrack => ({
                id: item.id,
                title: item.title,
            }));

            return {
                response: tracks,
            };
        })
        .catch((error) => { error });

    return promise;
};

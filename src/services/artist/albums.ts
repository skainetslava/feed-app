import { IAlbum } from "src/models";
import { getData } from "../api";

export interface IArtistAlbumsData {
    response?: IAlbum[];
    error?: object;
}

export const fetchArtistAlbumsAPI = async (id: number): Promise<IArtistAlbumsData | void> => {
    const { data } = await getData({ url: `/artist/${id}/albums` });

    if (data.error) {
        const { error } = data;
        return { error };
    }

    const albums = data.data.map(
        (item: any): IAlbum => ({
            id: item.id,
            title: item.title,
            // artist: item.artist.name,
            coverSmallTrack: item.cover_small,
            coverBigTrack: item.cover_big,
            releaseDate: new Date(data.release_date).getFullYear(),
        }),
    );

    return {
        response: albums,
    };
};

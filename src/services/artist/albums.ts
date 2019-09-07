import { IAlbum } from "src/models";
import { getData } from "../api";

export interface IArtistAlbumsData {
    response?: {
        albums: IAlbum[];
        singles: IAlbum [];
    };
    error?: object;
}

export const fetchArtistAlbumsAPI = async (id: number): Promise<IArtistAlbumsData | void> => {
    const { data } = await getData({ url: `/artist/${id}/albums` });

    if (data.error) {
        const { error } = data;
        return { error };
    }

    const albumsData = data.data.map(
        (item: any): IAlbum => ({
            id: item.id,
            title: item.title,
            recordType: item.record_type,
            coverSmallTrack: item.cover_small,
            coverBigTrack: item.cover_big,
            releaseDate: new Date(data.release_date).getFullYear(),
        }),
    );

    const albums = albumsData.filter((item: IAlbum) => item.recordType === "album");
    const singles = albumsData.filter((item: IAlbum) => item.recordType !== "album");

    return {
        response: {
            albums,
            singles,
        },
    };
};

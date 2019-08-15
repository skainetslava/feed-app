import { IArtist } from "src/models";
import { getData } from "../api";

export interface IArtistsData {
    response?: IArtist[];
    error?: object;
}

export const searchArtistAPI = async (value: string): Promise<IArtistsData | void> => {
    const { data } = await getData({ url: `/search/artist`, params: { q: value } })

    if (data.error) {
        const { error } = data;
        return { error };
    }

    const artists = data.data.map(
        (item: any): IArtist => ({
            id: item.id,
            name: item.name,
            picture: item.picture_big,
            fans: item.nb_fan,
        }),
    );

    return {
        response: artists.slice(0, 12),
    };
};

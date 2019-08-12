import { ITrack } from "src/models";
import { getData } from "../api";

export interface ISearchData {
  response?: ITrack[];
  error?: object;
}

export const searchDataApi = (value: string): Promise<ISearchData | void> => {
  const promise = getData({ url: `/search`, params: { q: value} })
    .then((response) => {
      const { data } = response;

      const tracks = data.data.map(
        (item: any): ITrack => ({
          id: item.id,
          title: item.title,
          artist: item.artist.name,
          artistId: item.artist.id,
          duration: item.duration,
          coverBigTrack: item.album.cover_big,
        }),
      );

      return {
        response: tracks.slice(0, 5),
      };
    })
    .catch((error) => ({
      error,
    }),
    );

  return promise;
};

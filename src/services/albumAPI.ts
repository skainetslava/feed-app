import { IAlbum } from "src/models";
import { getData } from "./api";

export interface IAlbumData {
  response?: {
      album: IAlbum[],
  };
  error?: object;
}

export const fetchAlbumDataApi = (id: number): Promise<IAlbumData | void> => {
  const promise = getData({ url: `/album/${id}` })
    .then((response) => {
      const { data } = response;

      const album = data.albums.data.map(
        (item: any): IAlbum => ({
          id: item.id,
          title: item.title,
          artist: item.artist.name,
          coverSmallTrack: item.cover_small,
          coverBigTrack: item.cover_big,
        }),
      );

      return {
        response: album,
      };
    })
    .catch((error) => {
      error;
    });

  return promise;
};

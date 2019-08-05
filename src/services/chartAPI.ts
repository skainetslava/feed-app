// import { normalizeData } from 'src/schemas';
// import { allPhotosSchema } from 'src/schemas/feed';
import { IAlbum, ITrack } from "src/models";
import { getData } from "./api";

export interface IChartData {
  response?: {
      tracks: ITrack[],
      albums: IAlbum[],
  };
  error?: object;
}

export const fetchChartApi = (): Promise<IChartData | void> => {
  const promise = getData({ url: `/chart` })
    .then((response) => {
      const { data } = response;
      // const normalizedPhotos = normalizeData(data, allPhotosSchema);
      const tracks = data.tracks.data.map(
        (item: any): ITrack => ({
          id: item.id,
          title: item.title,
          artist: item.artist.name,
          artistId: item.artist.id,
          duration: item.duration,
          albumName: item.album.name,
          pictureBigArtist: item.artist.picture_big,
          coverSmallTrack: item.album.cover_small,
          coverBigTrack: item.album.cover_big,
        }),
      );

      const albums = data.albums.data.map(
        (item: any): IAlbum => ({
          id: item.id,
          title: item.title,
          artist: item.artist.name,
          coverSmallTrack: item.cover_small,
          coverBigTrack: item.cover_big,
        }),
      );

      return {
        response: { tracks, albums },
      };
    })
    .catch((error) => {
      error;
    });

  return promise;
};

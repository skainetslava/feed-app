import { IAlbum, IPlaylist, ITrack } from "src/models";
import { getData } from "../api";

export interface IChartData {
  response?: {
    tracks: ITrack[],
    albums: IAlbum[],
    playlists: IPlaylist[],
  };
  error?: object;
}

export const fetchChartApi = (): Promise<IChartData | void> => {
  const promise = getData({ url: `/chart` })
    .then((response) => {
      const { data } = response;

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
          preview: item.preview,
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

      const playlists = data.playlists.data.map(
        (item: any): IPlaylist => ({
          id: item.id,
          title: item.title,
          coverSmallTrack: item.picture_small,
          coverBigTrack: item.picture_big,
        }),
      );

      return {
        response: {
          tracks,
          albums,
          playlists,
        },
      };
    })
    .catch((error) => {
      error;
    });

  return promise;
};

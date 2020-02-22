import { IPlaylist, ITrack } from "src/models";
import { getData } from "../api";

export interface IPlaylistData {
  response?: IPlaylist;
  error?: object;
}

export const fetchPlaylistDataApi = (id: number): Promise<IPlaylistData | void> => {
  const promise = getData({ url: `/playlist/${id}` })
    .then((response) => {
      const { data } = response;

      const tracks = data.tracks.data.map(
        (item: any): ITrack => ({
          id: item.id,
          title: item.title,
          artist: item.artist.name,
          artistId: item.artist.id,
          duration: item.duration,
          preview: item.preview,
          coverBigTrack: data.picture_big,
        }),
      );

      const playlist: IPlaylist = {
        id: data.id,
        title: data.title,
        coverSmallTrack: data.picture_small,
        coverBigTrack: data.picture_big,
        tracks,
      };

      return {
        response: playlist,
      };
    })
    .catch((error) => ({
      error,
    }),
    );

  return promise;
};

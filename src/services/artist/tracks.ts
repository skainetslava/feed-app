import { ITrack } from "src/models";
import { getData } from "../api";

export interface IArtistTracksData {
  response?: ITrack[];
  error?: object;
}

export const fetchArtistMostPopularTracksAPI = async (id: number): Promise<IArtistTracksData | void> => {
  const { data } = await getData({ url: `/artist/${id}/top` });

  if (data.error) {
    const { error } = data;
    return { error };
  }

  const tracks = data.data.map(
    (item: any): ITrack => ({
      id: item.id,
      title: item.title,
      artist: item.artist.name,
      artistId: item.artist.id,
      duration: item.duration,
      albumName: item.album.title,
      coverSmallTrack: item.album.cover_medium,
    }),
  );

  return {
    response: tracks,
  };
};

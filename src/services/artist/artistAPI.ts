import { IArtist } from "src/models";
import { getData } from "../api";

export interface IArtistData {
  response?: IArtist;
  error?: object;
}

export const fetchArtistDataApi = async (id: number): Promise<IArtistData | void> => {
  const { data } = await getData({ url: `/artist/${id}` });

  if (data.error) {
    const { error } = data;
    return { error };
  }

  const artist: IArtist = {
    id: data.id,
    name: data.name,
    picture: data.picture_big,
    fans: data.nb_fans,
  };

  return {
    response: artist,
  };
};

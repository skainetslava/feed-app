import { IArtist } from "src/models";
import { getData } from "./api";

export interface IArtistData {
  response?: IArtist;
  error?: object;
}

export const fetchArtistDataApi = (id: number): Promise<IArtistData | void> => {
  const promise = getData({ url: `/artist/${id}` })
    .then((response) => {
      const { data } = response;
      console.log(data)

    //   const tracks = data.tracks.data.map(
    //     (item: any): ITrack => ({
    //       id: item.id,
    //       title: item.title,
    //       artist: item.artist.name,
    //       duration: item.duration,
    //     }),
    //   );

      const artist: IArtist = {
        id: data.id,
        name: data.name,
        picture: data.picture_big,
        fans: data.nb_fans,
      };

      return {
        response: artist,
      };
    })
    .catch((error) => {
      error;
    });

  return promise;
};

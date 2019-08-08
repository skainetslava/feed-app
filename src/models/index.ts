
export interface IChart {
    id: number;
    title: string;
}

export interface ITrack {
    id: number,
    title: string,
    artist: string,
    artistId: number,
    duration: number,
    albumName?: string,
    pictureBigArtist?: string,
    coverSmallTrack?: string,
    coverBigTrack?: string,
}

export interface IAlbum {
    id: number,
    title: string,
    artist?: string,
    coverSmallTrack: string,
    coverBigTrack: string,
    tracks?: ITrack[],
    releaseDate?: number
}

export interface IArtist {
    id: number,
    name: string,
    picture: string,
    fans: number,
}

export interface IChart {
    id: number;
    title: string;
}

export interface ITrack {
    id: number,
    title: string,
    artist: string,
    duration: number,
    albumName?: string,
    pictureBigArtist?: string,
    coverSmallTrack?: string,
    coverBigTrack?: string,
}

export interface IAlbum {
    id: number,
    title: string,
    artist: string,
    coverSmallTrack: string,
    coverBigTrack: string,
    tracks?: ITrack[],
    releaseDate?: number
}
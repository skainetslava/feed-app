
export interface IChart {
    id: number;
    title: string;
}

export interface ITrack {
    id: number,
    title: string,
    preview: string,
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
    releaseDate?: number,
    recordType?: string,
}

export interface IPlaylist {
    id: number,
    title: string,
    coverSmallTrack: string,
    coverBigTrack: string,
    tracks?: ITrack[],
    creationDate?: number
}

export interface IArtist {
    id: number,
    name: string,
    picture: string,
    fans: number,
}

export interface ICurrentAudio {
    source: ITrack,
    timing: number
}


export interface IIconProps {
    w?: number,
    h?: number,
    className?: string,
    onClick?: () => void
}
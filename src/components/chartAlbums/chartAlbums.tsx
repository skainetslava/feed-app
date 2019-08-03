import * as React from "react";

import "./chartAlbums.scss";

import { Album } from "src/components/albumItem";
import { IAlbum } from "src/models";

interface IChartAlbumsProps {
    albums?: IAlbum[]
}

const ChartAlbums: React.FC<IChartAlbumsProps> = ({ albums }) => {
    const renderAlbums = () => {
        if (albums && albums.length > 0) {
            return albums.map((album) => {
                return <Album album={album} key={album.id} />;
            })

        }

        return <div>Empty list</div>;
    }


    return (
        <div className="albums">
            {renderAlbums()}
        </div>
    )
};

export default ChartAlbums;

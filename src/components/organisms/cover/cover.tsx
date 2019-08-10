import cls from "classnames";
import * as React from "react";
import { HeaderCover } from "src/components/organisms/header-cover";
import { Tabs } from "src/components/organisms/tabs";
import "./cover.scss";

interface ICoverProps {
    withActions: boolean,
    listeners?: number,
    title?: string,
    image?: string,
    hasTabs?: boolean
}

const Cover: React.FC<ICoverProps> = ({ image, title, withActions, listeners, hasTabs, children }) => {
    const style = image ? { backgroundImage: `url(${image})` } : undefined;
    return (
        <div className={cls("cover", { "cover--black ": image })}>
            {hasTabs && <Tabs />}
            <div className={cls("cover_header",
                { "cover_header_color-wrapper cover_header--height": withActions })}
                style={style}
            >
                <HeaderCover title={title} withActions={withActions} listeners={listeners} />
            </div>
            {children}
        </div>
    )
};

export default Cover;

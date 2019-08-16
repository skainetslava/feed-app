import * as React from "react";

import { Input } from "src/components/organisms/input";
import { Tabs } from "src/components/organisms/tabs";

import { getSearchingTabs } from "src/constants/tabs";

import "./search.scss";

interface ISearchComponentProps {
    valueUrl: string,
    onChangeInput: (v: string) => void
}

const Search: React.FC<ISearchComponentProps> = ({ valueUrl, onChangeInput }) => {

    return (
        <>
            <Input placeholder="Start typing..." value={valueUrl} onChange={onChangeInput} />
            <Tabs className="search_tracks_tabs" tabs={getSearchingTabs(valueUrl)} />
        </>
    )
};

export default Search;

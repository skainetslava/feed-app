export const TABS_TITLES = {
    charts: {
        title: "charts",
        link: "/chart",
    },
    albums: {
        title: "albums",
        link: "/albums",
    },
    playlists: {
        title: "playlists",
        link: "/playlists",
    },
};

export function getSearchingTabs(value: string): object {
    return ({
        results: {
            title: "top results",
            link: `/search/results/${value}`,
        },
        artists: {
            title: "artists",
            link: `/search/artists/${value}`,
        },
        songs: {
            title: "songs",
            link: `/search/songs/${value}`,
        },
        // albums: {
        //     title: "albums",
        //     link: `/search/albums/${value}`,
        // },
        // playlists: {
        //     title: "playlists",
        //     link: `/search/playlists/${value}`,
        // },
    })
};

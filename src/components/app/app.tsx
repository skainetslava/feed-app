import cls from "classnames";
import * as React from "react";
import { Navbar } from "src/components/organisms/navbar";
import { PlayerContainer } from "src/containers/player";

import "./app.scss";

const App: React.FC = React.memo(({ children }) => {
    return (
        <div className="app">
            <Navbar />
            <PlayerContainer />
            {children}
        </div>
    )
});

export default App;

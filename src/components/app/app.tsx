import * as React from "react";

import { Player } from "src/components//organisms/player";
import { Navbar } from "src/components/organisms/navbar";

import "./app.scss";

const App: React.FC = ({ children }) => {
    return (
        <div className="app">
            <Navbar />
            <Player />
            {children}
        </div>
    )
};

export default App;
